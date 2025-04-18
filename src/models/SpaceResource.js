import { sequelize, DataTypes } from "../config/database.js";

const SpaceResource = sequelize.define('SpaceResource', {
	space_id: { type: DataTypes.INTEGER, primaryKey: true },
	resource_id: { type: DataTypes.INTEGER, primaryKey: true },
	quantity: { type: DataTypes.INTEGER, allowNull: false }
}, {
	tableName: 'space_resource',
	timestamps: true
});


export { SpaceResource }
