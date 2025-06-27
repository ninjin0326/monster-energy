/* ? 解説
 * step1. 文字列をUTF-8バイト列へ変換
 *        sha-256はバイト列を受け取るため必須な変換
 * step2. Web CryptoApiの低レベル関数を用いてハッシュ化したバイト列に変換
 * step3. バイト列から16進数に変換し、連結することで64文字のハッシュ文字列が生成される
 */

// Generate hash value from argument text by cryptoApi's sha256Hex generator.
export async function sha256Hash(text: string): Promise<string> {
  const data = new TextEncoder().encode(text);
  const hashBuffer = await crypto.subtle.digest("SHA-256", data);

  return [...new Uint8Array(hashBuffer)]
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}
