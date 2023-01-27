import CDP from "chrome-remote-interface";

// This is the service worker script, which executes in its own context
// when the extension is installed or refreshed (or when you access its console).
// It would correspond to the background script in chrome extensions v2.

console.log(
	"This prints to the console of the service worker (background script)"
);

// fetch the related files
const getRemoteTargets = async () => {
	const res = await fetch("http://localhost:9222/json");
	return await res.json();
};

let websocketDebuggerURL: string;
// NOTE: this canNOT be an arrow () => {} function because otherwise it'd overwrite the chrome
// object with the runtime only one, and we'll lose all of our server-only APIs.
// so, the callback must be of type function() {}
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
	console.log(request);
	if (request.type === "getTargets") {
		getRemoteTargets()
			.then((targets) => {
				const actualTargets = [];
				for (let t of targets) {
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

		/*

		const targetId = `1WMHH3N01Y0142:chrome_devtools_remote:${request.target.id}`;
		console.log(targetId);

		// debugger doesn't work with remote chrome tabs
		chrome.debugger
			.attach({ targetId }, "1.3")
			.then((attached) => {
				console.log(attached);
			})
			.catch((e) => {
				console.log(e);
				console.log(chrome.runtime.lastError);
			});
			*/
	}
	return true;
});

async function connectToClient(websocket: string) {
	let client: CDP.Client;
	try {
		client = await CDP({
			target: websocket,
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
	} catch (err) {
		console.error(err);
	} finally {
		if (client) {
			await client.close();
		}
	}
}
