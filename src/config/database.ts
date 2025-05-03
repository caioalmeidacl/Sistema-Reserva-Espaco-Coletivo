import { Sequelize } from "sequelize";

const sequelize = new Sequelize({
	database: process.env.DB_NAME,
	username: process.env.DB_USER,
	password: process.env.DB_PASSWORD,
	dialect: 'postgres',
	host: process.env.DB_HOST,
	define: {
		schema: process.env.DB_SCHEMA
	}
});

async function connect() {
	try {
		await sequelize.authenticate()
		sequelize.query(`CREATE SCHEMA IF NOT EXISTS ${process.env.DB_SCHEMA}`)

		await sequelize.sync({ alter: true })
	} catch (error) {
		console.error('Unable to connect to the database:', error)
	}
}
connect()

