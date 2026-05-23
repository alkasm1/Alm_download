/* path: alm_download/smart_downloader/download_manager.js */

export class DownloadManager {
  async download(url) {
    const res = await fetch(url);
    const buf = await res.arrayBuffer();
    return buf;
  }
}
