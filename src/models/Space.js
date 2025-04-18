import { sequelize, DataTypes } from "../config/database.js";


const Space = sequelize.define('Space', {
	id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
	name: { type: DataTypes.STRING(100), allowNull: false },
	type: { type: DataTypes.STRING(50), allowNull: false },
	capacity: { type: DataTypes.INTEGER, allowNull: false },
	description: { type: DataTypes.TEXT },
	manager_id: { type: DataTypes.INTEGER }
}, {
	tableName: 'Space',
	timestamps: false
});

Space.associate = models => {
	Space.belongsTo(models.User, { foreignKey: 'manager_id' });
	Space.hasMany(models.Reservation, { foreignKey: 'space_id' });
	Space.belongsToMany(models.Resource, {
		through: models.SpaceResource,
		foreignKey: 'space_id'
	});
};

export { Space }
