window.onload = () => {
    const button: HTMLButtonElement = document.getElementById("get-targets") as HTMLButtonElement;
    button.onclick = async () => {
        console.log(chrome.runtime.sendMessage("getTargets"));
        console.log('getting targets')
    }
    
}
