/* path: alm_download/alm_core/chunking.ts */

export function chunkBuffer(buffer, size = 64 * 1024) {
  const chunks = [];
  for (let i = 0; i < buffer.byteLength; i += size) {
    chunks.push(buffer.slice(i, i + size));
  }
  return chunks;
}

export function mergeChunks(chunks) {
  let total = 0;
  chunks.forEach(c => total += c.byteLength);

  const merged = new Uint8Array(total);
  let offset = 0;

  chunks.forEach(c => {
    merged.set(new Uint8Array(c), offset);
    offset += c.byteLength;
  });

  return merged.buffer;
}
