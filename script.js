document.getElementById("remove-bg").addEventListener("click", function () {
    openTool("remove-bg");
});

document.getElementById("upscale").addEventListener("click", function () {
    openTool("upscale");
});

function openTool(type) {
    let url = "";

    if (type === "remove-bg") {
        url = "https://www.remove.bg/upload";  
    } else if (type === "upscale") {
        url = "https://www.upscale.media/upload"; 
    }

    window.open(url, "_blank");

    window.parent.postMessage(
        { action: "imageTool", tool: type, url: url },
        "*"
    );
}
