/* path: alm_download/ui_demo/app.js */

import { DownloadManager } from "../smart_downloader/download_manager.js";

const logBox = document.getElementById("log");
const startBtn = document.getElementById("start");
const urlInput = document.getElementById("url");

function log(msg) {
  logBox.textContent += msg + "\n";
  console.log(msg);
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
    log("📡 Downloading from: " + url);

    const buffer = await dm.download(url, log);

    log("✅ File downloaded successfully.");
    log("📦 File size: " + buffer.byteLength + " bytes");

  } catch (err) {
    log("❌ Download failed: " + err.message);
  }
};
