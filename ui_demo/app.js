import { DownloadManager } from "../smart_downloader/download_manager.js";

const logBox = document.getElementById("log");
const startBtn = document.getElementById("start");
const urlInput = document.getElementById("url");

function log(msg) {
  logBox.textContent += msg + "\n";
}

startBtn.onclick = async () => {
  log("🚀 Starting session...");

  const url = urlInput.value.trim();
  if (!url) {
    log("❌ ERROR: لم يتم إدخال رابط");
    return;
  }

  try {
    const dm = new DownloadManager();
    const buffer = await dm.download(url, log);

    log("📦 File size: " + buffer.byteLength + " bytes");

  } catch (err) {
    log("❌ Download failed: " + err.message);
  }
};
