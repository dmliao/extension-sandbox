# Minimal Extension to control remote android chrome tabs

Written in Typescript using https://github.com/SimGus/chrome-extension-v3-starter.

## Building

```
$ npm install
$ node build
```

The extension is written in Typescript, and builds to Javascript.

The main reason why things need to be built are:

1. to import chrome-remote-interface, because extensions do not like import statements
2. to be able to fake the window

## Usage

First, unpack and install the extension (all js files were created next to their source .ts files, so the base directory should just work.)

Connect your remote (adb debugging-enabled Android) device and open the browser on the device. You'll need to run

```
adb forward tcp:9222 localabstract:chrome_devtools_remote
```

on your desktop while the device is connected to allow `localhost:9222` to see the remote device's tabs.

Then, click on the extension icon to open the popup, and click `Get Targets`. You should see a list of tabs as buttons. Click on a button to turn that tab into Github.com.

> Practically, you'd want the extension to do something other than go to github on that tab, but hey it does something.

Errors are logged to console, right click -> inspect the popup to open the console.