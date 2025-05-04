import { Router } from "express";
import { userRoutes } from "./router.userRoutes";
import { reservationRoutes } from "./router.reservationRoutes";

const router = Router();

router.use('/users', userRoutes);
router.use('/reservations', reservationRoutes)

export { router }
