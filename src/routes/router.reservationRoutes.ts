import { Router } from "express";
import { reservationController } from "../controllers";

const reservationRoutes = Router();

reservationRoutes.get('/', (req, res) => {
	reservationController.findReservations(req, res)
});

reservationRoutes.get('/my-reservations/:id', (req, res) => {
	reservationController.findMyReservations(req, res)
});

reservationRoutes.put('/cancel/:id', (req, res) => {
	reservationController.cancelReservation(req, res)
});

reservationRoutes.put('/approve/:id', (req, res) => {
	reservationController.approveReservation(req, res)
});

reservationRoutes.put('/reject/:id', (req, res) => {
	reservationController.rejectReservation(req, res)
});

export { reservationRoutes }
