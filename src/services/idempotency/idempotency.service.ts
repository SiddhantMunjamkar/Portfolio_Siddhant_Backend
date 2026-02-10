import { redis } from "../../config/redis";
import { idempotencyKey } from "./idempotency.keys";

export async function idempotency(params: { email: string; body: string }) {
  const key = idempotencyKey(params.email, params.body);
  const lock = await redis.set(key, "1", "EX", 300, "NX");

  return { acquired: lock === "OK", key };
}

export async function releaseIdempotency(key: string): Promise<void> {
  await redis.del(key);
}
