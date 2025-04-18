import { User } from '../models/User.js'

class UserController {
	async getAllUsers(req, res) {
		const users = await User.findAll();

		if (!users) return res.status(404).json({ msg: "Users Not Found" });

		return res.status(200).json(users);
	}

	async createUser(req, res) {
		try {
			const body = req.body;

			const user = await User.create(body);

			return res.status(201).json(user);
		} catch (e) {
			return res.status(400).json({ message: e.message })
		}
	}
}

export const userController = new UserController();
