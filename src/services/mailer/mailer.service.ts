import nodemailer from "nodemailer";

export function createTransporter() {
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: false,
    auth: {
      user: process.env.SMTP_USER, // Your Gmail address
      pass: process.env.SMTP_PASS, // App Password (not regular password)
    },
    tls: {
      rejectUnauthorized: false,
    },
  } as nodemailer.TransportOptions);

  return transporter;
}
