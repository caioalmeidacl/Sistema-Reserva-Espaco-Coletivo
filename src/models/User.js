import { sequelize, DataTypes } from "../config/database.js";

const User = sequelize.define('User', {
	id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
	name: { type: DataTypes.STRING(100), allowNull: false },
	email: { type: DataTypes.STRING(100), allowNull: false, unique: true },
	password: { type: DataTypes.STRING(255), allowNull: false },
	phone: { type: DataTypes.STRING(20) },
	role: { type: DataTypes.STRING(20), allowNull: false, defaultValue: 'regular' }
}, {
	tableName: 'user',
});

User.associate = models => {
	User.hasMany(models.Space, { foreignKey: 'manager_id' });
	User.hasMany(models.Reservation, { foreignKey: 'user_id' });
	User.hasMany(models.ReservationHistory, { foreignKey: 'action_user' })
}

export { User }
