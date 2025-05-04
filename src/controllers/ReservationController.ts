import { Reservation } from "../models/Reservation";
import { Request, Response } from "express";
import { ReservationStatus } from "../models/Reservation";

class ReservationController {
	async findReservations(req: Request, res: Response): Promise<Response> {
		try {
			const reservations = await Reservation.findAll();
			return res.status(200).json(reservations);
		} catch (error) {
			return res.status(500).json({ message: "Error retrieving reservations" });
		}
	}

	async findMyReservations(req: Request, res: Response): Promise<Response> {
		try {
			const { id } = req.params;

			const reservations = await Reservation.findAll({
				where: {
					userId: id,
				},
			});

			return res.status(200).json(reservations);
		} catch (error) {
			return res.status(500).json({ message: "Error retrieving reservations" });
		}
	}

	async cancelReservation(req: Request, res: Response): Promise<Response> {
		try {
			const { id } = req.params;

			const reservation = await Reservation.findByPk(id);

			if (!reservation) return res.status(404).json({ message: "Reservation not found" });

			await reservation.destroy();

			const reservations = await Reservation.findAll({
				where: {
					userId: reservation.user_id,
				},
			});

			return res.status(200).json(reservations);
		} catch (error) {
			return res.status(500).json({ message: "Error canceling reservations" });
		}
	}

	async approveReservation(req: Request, res: Response): Promise<Response> {
		try {
			const { id } = req.params;

			const reservation = await Reservation.findByPk(id);

			if (!reservation) return res.status(404).json({ message: "Reservation not found" });

			reservation.status = ReservationStatus.APPROVED;

			await reservation.save();

			return res.status(200).json({ message: "Reservation approved" });
		} catch (error) {
			return res.status(500).json({ message: "Error approving reservations" });
		}
	}

	async rejectReservation(req: Request, res: Response): Promise<Response> {
		try {
			const { id } = req.params;

			const reservation = await Reservation.findByPk(id);

			if (!reservation) return res.status(404).json({ message: "Reservation not found" });

			reservation.status = ReservationStatus.REJECTED;

			await reservation.save();

			const reservations = await Reservation.findAll({
				where: {
					userId: reservation.user_id,
				},
			});

			return res.status(200).json({ message: "Reservation was rejected", reservations });
		} catch (error) {
			return res.status(500).json({ message: "Error rejecting reservations" });
		}
	}
}

export { ReservationController };
