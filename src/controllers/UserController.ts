import { User } from '../models/User'
import { Request, Response } from 'express';

class UserController {
	async findUsers(req: Request, res: Response): Promise<Response> {
		try {
			const users = await User.findAll();

			return res.status(200).json(users);
		} catch (error: any) {
			return res.status(400).json({ message: error.message });
		}
	}

	async findUserById(req: Request, res: Response): Promise<Response> {
		try {
			const { id } = req.params;
			const user = await User.findByPk(id);

			return res.status(200).json(user);
		} catch (error: any) {
			return res.status(400).json({ message: error.message });
		}
	}

	async signUp(req: Request, res: Response): Promise<Response> {
		try {
			const body = req.body;

			const user = await User.create(body);

			return res.status(201).json(user);
		} catch (error: any) {
			return res.status(400).json({ message: error.message })
		}
	}

	async login(req: Request, res: Response): Promise<Response> {
		try {
			const { email, password } = req.body;

			const user = await User.findOne({ where: { email, password } });

			if (!user) throw new Error('Email or password is incorrect');

			return res.status(200).json({ message: 'Login successful' });
		} catch (error: any) {
			return res.status(404).json({ message: error.message })
		}
	}

	async updateUser(req: Request, res: Response): Promise<Response> {
		try {
			const { id } = req.params;
			const body = req.body;

			const user = await User.findByPk(id);

			if (!user) throw new Error('User not found');

			await user.update(body);

			return res.status(200).json({ message: 'User updated successfully' });
		} catch (error: any) {
			return res.status(400).json({ message: error.message })
		}
	}

}

export { UserController }; 
