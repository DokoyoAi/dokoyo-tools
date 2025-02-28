document.getElementById("remove-bg").addEventListener("click", function () {
    openTool("remove-bg");
});

document.getElementById("upscale").addEventListener("click", function () {
    openTool("upscale");
});

function openTool(type) {
    let url = "";

    if (type === "remove-bg") {
        url = "https://www.remove.bg/upload";  // URL asli tidak bisa langsung digunakan
    } else if (type === "upscale") {
        url = "https://www.upscale.media/upload"; // URL asli tidak bisa langsung digunakan
    }

    // Buka halaman dalam tab baru (sementara, nanti kita buat iframe)
    window.open(url, "_blank");

    // Kirim pesan ke Zakeke iframe
    window.parent.postMessage(
        { action: "imageTool", tool: type, url: url },
        "*"
    );
}
