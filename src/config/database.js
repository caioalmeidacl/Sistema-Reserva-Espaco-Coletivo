import { Sequelize } from "sequelize";

const sequelize = new Sequelize({
	database: process.env.DB_NAME,
	username: process.env.DB_USER,
	password: process.env.DB_PASSWORD,
	dialect: 'postgres',
	host: process.env.DB_HOST,
});


export { sequelize, Sequelize as SequelizeInstance }
