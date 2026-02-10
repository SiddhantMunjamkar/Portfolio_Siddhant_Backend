import { Router } from "express";
import emailRoutes from "./email.routes";

const router = Router();

router.use("/message", emailRoutes);

export default router;
