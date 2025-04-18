import express from 'express';
import { router } from './routes/routes.js';
import { sequelize } from './config/database.js';

const PORT = 3333;

const app = express()

app.use(express.json());

app.use(router)

try {
	await sequelize.authenticate()
} catch (e) {
	console.log(e.message)
}


app.listen(PORT, () => console.log('Server on'));
