import { sequelize, DataTypes } from "../config/database.js";

const Resource = sequelize.define('Resource', {
	id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
	name: { type: DataTypes.STRING(50), allowNull: false },
	description: { type: DataTypes.TEXT },
	available_quantity: { type: DataTypes.INTEGER, allowNull: false }
}, {
	tableName: 'resource',
	timestamps: false
});

Resource.associate = models => {
	Resource.belongsToMany(models.Space, {
		through: models.SpaceResource,
		foreignKey: 'resource_id',
		otherKey: 'space_id'
	});
};

export { Resource }
