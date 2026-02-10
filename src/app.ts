import express from "express";
import { Request, Response } from "express";
import cors from "cors";
import router from "./routes";

export const app = express();
app.use(express.json());

app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "https://portfolio-siddhant-munjamkar.vercel.app",
    ],
  }),
);

app.get("/health", (req: Request, res: Response) => {
  res.status(200).send("OK");
});

app.use("/api/v1", router);
