import { EmailType } from "../config/email.type";
import {
  idempotency,
  releaseIdempotency,
} from "../services/idempotency/idempotency.service";
import { createTransporter } from "../services/mailer/mailer.service";
import { generateEmailHTML } from "../services/mailer/bodyhtml";
import { Ratelimitkeys } from "../services/rateLimit/rate.Limit.keys";
import { rateLimit } from "../services/rateLimit/rate.Limit.service";

export async function processEmail(params: { info: EmailType; ip: string }) {
  const transporter = createTransporter();

  const lock = await idempotency({
    email: params.info.email,
    body: params.info.body,
  });

  if (!lock.acquired) {
    return { message: "Email is already being processed." };
  }

  try {
    const ratelimitIp = await rateLimit(Ratelimitkeys.rateIp(params.ip), 5, 60); // 5 requests per minute per IP

    if (!ratelimitIp.allowed) {
      throw new Error("Rate limit exceeded for IP");
    }

    const ratelimitEmail = await rateLimit(
      Ratelimitkeys.rateEmail(params.info.email),
      5,
      60,
    ); // 5 requests per minute per IP

    if (!ratelimitEmail.allowed) {
      throw new Error("Rate limit exceeded for email");
    }

    const ratelimitSender = await rateLimit(
      Ratelimitkeys.rateSender(params.ip, params.info.email),
      5,
      60,
    ); // 5 requests per minute per IP

    if (!ratelimitSender.allowed) {
      throw new Error("Rate limit exceeded for sender");
    }

    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: process.env.SMTP_USER,
      subject: `Portfolio Contact: ${params.info.name}`,
      html: generateEmailHTML(params.info),
    });
  } catch (error) {
    console.error("Error sending email:", error);
    await releaseIdempotency(lock.key);
    throw new Error(
      `Email delivery failed: ${error instanceof Error ? error.message : "Unknown error"}`,
    );
  }
}
