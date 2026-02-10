import { Request, Response } from "express";
import { Router } from "express";
import { validateBodyRequest } from "../middleware/validateRequest";
import { emailSchema } from "../config/email.schemas";
import { processEmail } from "../queue/email.processor";

const router = Router();

router.post(
  "/send-message",
  validateBodyRequest(emailSchema),
  async (req: Request, res: Response) => {
    try {
      const ip = req.ip || "unknown";
      const { name, email, body } = req.body;
      const result = await processEmail({ info: { name, email, body }, ip });
      
      // Handle idempotency response
      if (result?.message === "Email is already being processed.") {
        return res.status(409).json({ message: result.message });
      }
      
      res.status(200).json({ message: "Email sent successfully" });
    } catch (error) {
      console.error("Email route error:", error);
      
      // Handle rate limit errors
      if (error instanceof Error && error.message.includes("Rate limit exceeded")) {
        return res.status(429).json({ message: "Too many requests. Please try again later." });
      }
      
      // Generic server error - don't expose internal details
      res.status(500).json({ message: "Failed to send email. Please try again later." });
    }
  },
);

export default router;
