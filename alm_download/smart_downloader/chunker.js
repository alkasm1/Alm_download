export function chunkBuffer(buffer, size = 64 * 1024) {
  const chunks = [];
  for (let i = 0; i < buffer.byteLength; i += size) {
    chunks.push(buffer.slice(i, i + size));
  }
  return chunks;
}
