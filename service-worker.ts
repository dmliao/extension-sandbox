// This is the service worker script, which executes in its own context
// when the extension is installed or refreshed (or when you access its console).
// It would correspond to the background script in chrome extensions v2.

console.log("This prints to the console of the service worker (background script)")

// Importing and using functionality from external files is also possible.
importScripts('service-worker-utils.js')

// If you want to import a file that is deeper in the file hierarchy of your
// extension, simply do `importScripts('path/to/file.js')`.
// The path should be relative to the file `manifest.json`.

console.log(chrome)
console.log(chrome.history)
console.log(chrome.debugger)

// NOTE: this canNOT be an arrow () => {} function because otherwise it'd overwrite the chrome
// object with the runtime only one, and we'll lose all of our server-only APIs.
// so, the callback must be of type function() {}
chrome.runtime.onMessage.addListener(async function (message, sender, response) {
    if (message === 'getTargets') {
        console.log('we got the message!')
        const targets = await chrome.debugger.getTargets();
        console.log(targets);
    }
})