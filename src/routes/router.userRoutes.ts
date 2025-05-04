import { Router } from "express";
import { userController } from "../controllers";

const userRoutes = Router();

userRoutes.get('/', (req, res) => {
	userController.findUsers(req, res);
});

userRoutes.get('/:id', (req, res) => {
	userController.findUserById(req, res);
});

userRoutes.post('/', (req, res) => {
	userController.signUp(req, res);
});

userRoutes.post('/login', (req, res) => {
	userController.login(req, res);
});

userRoutes.put('/:id', (req, res) => {
	userController.updateUser(req, res);
});

export { userRoutes }
