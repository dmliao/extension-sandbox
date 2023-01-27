import CDP from "chrome-remote-interface";
console.log("This prints to the console of the service worker (background script)");
const getRemoteTargets = async () => {
    const res = await fetch("http://localhost:9222/json");
    return await res.json();
};
let websocketDebuggerURL;
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
    }
    else if (request.type === "attachToTarget") {
        console.log(request.target);
        websocketDebuggerURL = request.target.webSocketDebuggerUrl;
        connectToClient(websocketDebuggerURL).then(() => {
            console.log('we successfully connected');
        });
    }
    return true;
});
async function connectToClient(websocket) {
    let client;
    try {
        client = await CDP({
            target: websocket,
        });
        const { Network, Page } = client;
        Network.requestWillBeSent((params) => {
            console.log(params.request.url);
        });
        await Network.enable();
        await Page.enable();
        await Page.navigate({ url: "https://github.com" });
        await Page.loadEventFired();
    }
    catch (err) {
        console.error(err);
    }
    finally {
        if (client) {
            await client.close();
        }
    }
}
