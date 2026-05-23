export class DownloadManager {
  async download(url) {
    const res = await fetch(url);
    const buf = await res.arrayBuffer();
    return buf;
  }
}
