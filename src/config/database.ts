import path from "path";
import { Sequelize } from "sequelize-typescript";

const sequelize = new Sequelize({
	database: process.env.DB_NAME,
	username: process.env.DB_USER,
	password: process.env.DB_PASSWORD,
	dialect: 'postgres',
	host: process.env.DB_HOST,
	models: [path.join(__dirname, '../models/*.ts')],
});

async function connect() {
	try {
		await sequelize.authenticate()
		sequelize.query(`CREATE SCHEMA IF NOT EXISTS ${process.env.DB_SCHEMA}`)

		await sequelize.sync({ force: true })
		console.log('Connected to the database successfully')
	} catch (error) {
		console.error('Unable to connect to the database:', error)
	}
}

connect()

export { sequelize }
