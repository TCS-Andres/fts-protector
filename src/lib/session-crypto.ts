// Encrypts small JSON payloads for httpOnly cookies (AES-256-GCM).
// The key is derived from SESSION_SECRET, so rotating that secret signs
// everyone out. Server-only: never import this from a Client Component.
import { createCipheriv, createDecipheriv, createHash, randomBytes } from "node:crypto";

const IV_BYTES = 12;
const TAG_BYTES = 16;

function key(): Buffer {
  const secret = process.env.SESSION_SECRET;
  if (!secret || secret.length < 32) {
    throw new Error("SESSION_SECRET must be set to at least 32 characters");
  }
  return createHash("sha256").update(`fts-session:${secret}`).digest();
}

export function hasSessionSecret(): boolean {
  const secret = process.env.SESSION_SECRET;
  return Boolean(secret && secret.length >= 32);
}

export function encryptJson(value: unknown): string {
  const iv = randomBytes(IV_BYTES);
  const cipher = createCipheriv("aes-256-gcm", key(), iv);
  const body = Buffer.concat([
    cipher.update(JSON.stringify(value), "utf8"),
    cipher.final(),
  ]);
  return Buffer.concat([iv, cipher.getAuthTag(), body]).toString("base64url");
}

// Returns null for anything tampered with, expired keys, or garbage input.
export function decryptJson<T>(token: string | undefined | null): T | null {
  if (!token) return null;
  try {
    const raw = Buffer.from(token, "base64url");
    if (raw.length <= IV_BYTES + TAG_BYTES) return null;
    const iv = raw.subarray(0, IV_BYTES);
    const tag = raw.subarray(IV_BYTES, IV_BYTES + TAG_BYTES);
    const body = raw.subarray(IV_BYTES + TAG_BYTES);
    const decipher = createDecipheriv("aes-256-gcm", key(), iv);
    decipher.setAuthTag(tag);
    const text = Buffer.concat([decipher.update(body), decipher.final()]).toString("utf8");
    return JSON.parse(text) as T;
  } catch {
    return null;
  }
}

export function randomToken(bytes = 32): string {
  return randomBytes(bytes).toString("base64url");
}

export function sha256Base64Url(input: string): string {
  return createHash("sha256").update(input).digest("base64url");
}
