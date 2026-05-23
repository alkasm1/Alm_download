/* path: alm_download/smart_downloader/download_manager.js */

export class DownloadManager {

  async download(url, log = console.log) {
    try {
      log("🔍 Checking URL...");

      if (!url.startsWith("https://")) {
        throw new Error("الرابط يجب أن يبدأ بـ HTTPS");
      }

      log("🌐 Sending request...");

      const res = await fetch(url);

      if (!res.ok) {
        throw new Error(`فشل التحميل: ${res.status} ${res.statusText}`);
      }

      log("⬇️ Downloading file...");

      const buf = await res.arrayBuffer();

      log("✅ File downloaded successfully.");
      return buf;

    } catch (err) {
      log("❌ ERROR: " + err.message);
      throw err;
    }
  }
}
