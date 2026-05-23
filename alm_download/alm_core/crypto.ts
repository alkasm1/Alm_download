export async function sha256(buffer) {
  const hash = await crypto.subtle.digest("SHA-256", buffer);
  return Array.from(new Uint8Array(hash))
    .map(b => b.toString(16).padStart(2, "0"))
    .join("");
}

export function xorEncrypt(buffer, key = 77) {
  const arr = new Uint8Array(buffer);
  for (let i = 0; i < arr.length; i++) {
    arr[i] ^= key;
  }
  return arr.buffer;
}

export function xorDecrypt(buffer, key = 77) {
  return xorEncrypt(buffer, key);
}
