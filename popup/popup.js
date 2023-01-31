(() => {
  // window-shim.js
  var fakeWindow = {};
  if (typeof window !== "undefined") {
    fakeWindow = window;
  }
  fakeWindow.criRequest = async (options, callback) => {
    const { host, port, path } = options;
    const url = `http://${host}:${port}${path}`;
    console.log(url);
    try {
      const res = await fetch({
        url,
        method: "get"
      });
      const responseText = await res.text();
      callback(null, responseText);
    } catch (e) {
      callback(e, null);
    }
  };

  // popup/popup.ts
  fakeWindow.onload = () => {
    const button = document.getElementById(
      "get-targets"
    );
    const targetDiv = document.getElementById("targets");
    button.onclick = async () => {
      console.log("clicked");
      const response = await chrome.runtime.sendMessage({ type: "getTargets" });
      console.log(response);
      switch (response.type) {
        case "listOfTargets":
          targetDiv.textContent = "";
          for (let target of response.data) {
            const targetButton = document.createElement("button");
            targetButton.textContent = target.title;
            targetButton.onclick = async () => {
              console.log("clicked");
              chrome.runtime.sendMessage({
                type: "attachToTarget",
                target
              });
            };
            targetDiv.appendChild(targetButton);
          }
          break;
        case "error":
          targetDiv.textContent = response.data.toString();
          break;
      }
    };
  };
})();
