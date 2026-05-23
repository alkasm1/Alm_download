export class DownloadManager {
  async download(url, log = console.log) {
    try {
      log("🔍 Checking URL...");

      // السماح بـ http و https
      if (!url.startsWith("http://") && !url.startsWith("https://")) {
        throw new Error("الرابط يجب أن يبدأ بـ http أو https");
      }

      log("🌐 Sending request...");

      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`HTTP Error: ${response.status}`);
      }

      log("⬇️ Downloading file...");

      const buffer = await response.arrayBuffer();

      log("✅ File downloaded successfully.");
      return buffer;

    } catch (err) {
      log("❌ ERROR: " + err.message);
      throw err;
    }
  }
}
