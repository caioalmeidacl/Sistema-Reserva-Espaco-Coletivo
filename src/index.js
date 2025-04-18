import express, { urlencoded } from 'express';
import { router } from './routes/routes.js';
import { sequelize } from './config/database.js';
import './models/index.js';

const PORT = 3333;

const app = express()
app.use(express.json());
app.use(router)


try {
	await sequelize.authenticate()

	sequelize.query(`CREATE SCHEMA IF NOT EXISTS ${process.env.DB_SCHEMA}`)

	await sequelize.sync({ force: true })

	console.log('deu bom')
} catch (e) {
	console.log(e.message)
}

app.listen(PORT, () => console.log('Server on'));
