// Bunny Stream signed embeds (Embed View Token Authentication).
// token = SHA256_HEX(token_security_key + video_id + expires), expires in unix
// seconds. See https://bunny.net/docs/stream/token-authentication
//
// Env:
//   BUNNY_STREAM_LIBRARY_ID   the library's numeric ID
//   BUNNY_STREAM_TOKEN_KEY    Security page > Token authentication key
//
// Only call this after the server has confirmed the viewer owns the video.
// Server-only module.
import { createHash } from "node:crypto";

const LIBRARY_ID = process.env.BUNNY_STREAM_LIBRARY_ID;
const TOKEN_KEY = process.env.BUNNY_STREAM_TOKEN_KEY;

// Long enough to finish a lesson, short enough that a copied link dies soon.
const TOKEN_TTL_SECONDS = 2 * 60 * 60;

export function isBunnyConfigured(): boolean {
  return Boolean(LIBRARY_ID && TOKEN_KEY);
}

// Returns null when the host isn't configured yet or the lesson has no
// uploaded video, so the page can show a "being prepared" state.
export function signEmbedUrl(videoId: string): string | null {
  if (!isBunnyConfigured() || !videoId) return null;
  const expires = Math.floor(Date.now() / 1000) + TOKEN_TTL_SECONDS;
  const token = createHash("sha256")
    .update(`${TOKEN_KEY}${videoId}${expires}`)
    .digest("hex");
  const query = new URLSearchParams({
    token,
    expires: String(expires),
    autoplay: "false",
    preload: "true",
    responsive: "true",
  });
  return `https://player.mediadelivery.net/embed/${LIBRARY_ID}/${encodeURIComponent(
    videoId
  )}?${query}`;
}
