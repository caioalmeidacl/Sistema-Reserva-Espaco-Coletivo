import { Sequelize, DataTypes } from "sequelize";


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


export { sequelize, DataTypes }
