import { UserController } from "./UserController";
import { ReservationController } from "./ReservationController";

const userController = new UserController();
const reservationController = new ReservationController();

export { userController, reservationController };
