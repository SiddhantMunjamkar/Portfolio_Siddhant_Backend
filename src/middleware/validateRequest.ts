import { Request, Response, NextFunction } from "express";
import { ZodSchema } from "zod";

export function validateBodyRequest(schema: ZodSchema) {
  return async (req: Request, res: Response, next: NextFunction) => {
    const body = req.body;
    const parsedBody = schema.safeParse(body);

    if (!parsedBody.success) {
      res.status(400).json({
        message: "Validation error",
        errors: parsedBody.error.flatten(),
      });
    }
    req.body = parsedBody.data;
    next();
  };
}
