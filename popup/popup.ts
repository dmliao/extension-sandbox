window.onload = () => {
	const button: HTMLButtonElement = document.getElementById(
		"get-targets"
	) as HTMLButtonElement;
	const targetDiv = document.getElementById("targets");
	button.onclick = async () => {
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
							target: target,
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
