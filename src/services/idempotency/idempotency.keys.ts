import crypto from "crypto";

export function idempotencyKey(email: string, body: string) {
  const hash = crypto
    .createHash("sha256")
    .update(`${email.trim().toLowerCase()}:${body}`)
    .digest("hex");

  return `lock:email-send:${hash}`;
}
