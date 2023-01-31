import CDP from "chrome-remote-interface/chrome-remote-interface.js";

// This is the service worker script, which executes in its own context
// when the extension is installed or refreshed (or when you access its console).
// It would correspond to the background script in chrome extensions v2.


// fetch the json of external targets to grab the websocket server URLs
const getRemoteTargets = async () => {
	const res = await fetch("http://localhost:9222/json");
	return await res.json();
};

let websocketDebuggerURL: string;
// NOTE: this cannot be an arrow () => {} function because otherwise it'd overwrite the chrome
// object with the runtime only one, and we'll lose all of our server-only APIs.
// so, the callback must be of type function() {}
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
	console.log(request);

	// sends to the popup all the tabs
	if (request.type === "getTargets") {
		getRemoteTargets()
			.then((targets) => {
				const actualTargets = [];
				for (let t of targets) {
					// we don't want to get the panel app nav ui, though this can be relaxed
					// for other extensions...
					if (t.type === "page") {
						actualTargets.push(t);
					}
				}
				sendResponse({
					type: "listOfTargets",
					data: actualTargets,
				});

				return true;
			})
			.catch((e) => {
				console.log(e);
				sendResponse({
					type: "error",
					data: e,
				});

				return true;
			});
	} else if (request.type === "attachToTarget") {
		console.log(request.target);
		websocketDebuggerURL = request.target.webSocketDebuggerUrl;

		connectToClient(websocketDebuggerURL).then(() => {
			console.log('we successfully connected');
		})
	}
	return true;
});

async function connectToClient(websocket: string) {
	let client: CDP.Client;
	try {
		// the extension did NOT like just saying CDP() when built with esbuild, so needed CDP.CDP()
		// it might be differenet with webpack or rollup
		client = await CDP.CDP({
			// string, websocket url
			target: websocket,

			// local needs to be true because Chrome Android does not come with its own version of the protocol
			// so we have to use the one from desktop
			local: true,
		});
		// extract domains
		const { Network, Page } = client;
		// setup handlers
		Network.requestWillBeSent((params) => {
			console.log(params.request.url);
		});
		// enable events then start!
		await Network.enable();
		await Page.enable();
		await Page.navigate({ url: "https://github.com" });
		await Page.loadEventFired();

		// note that this doesn't actually set the active tab, so the next time you navigate to the chosen tab
		// it'll be at github.com :]
	} catch (err) {
		console.error(err);
	} finally {
		if (client) {
			await client.close();
		}
	}
}
