import { redis } from "../../config/redis";

export async function rateLimit(key: string, limit: number, window: number) {
    
  const count = await redis.incr(key);

  if (count === 1) {
    await redis.expire(key, window);
  }

  const allowed = count <= limit;

  return { allowed, count };
}
