import { z } from "zod";

export const emailSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Email is invalid"),
  body: z.string().min(1, "Body is required"),
});
