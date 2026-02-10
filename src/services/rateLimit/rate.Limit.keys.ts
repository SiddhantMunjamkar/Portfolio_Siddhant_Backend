export const Ratelimitkeys = {
  rateIp: (ip: string) => {
    return `rateLimit:ip:${ip}`;
  },
  rateEmail: (email: string) => {
    return `rateLimit:email:${email.trim().toLowerCase()}`;
  },
  rateSender: (ip: string, email: string) => {
    return `rateLimit:sender:${ip}:${email.trim().toLowerCase()}`;
  },
};
