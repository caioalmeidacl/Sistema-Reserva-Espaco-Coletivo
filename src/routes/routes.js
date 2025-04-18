import { Router } from "express";
import { userRoutes } from "./router.userRoutes.js";

const router = Router();

router.use('/user', userRoutes)

export { router }

