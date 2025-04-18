import { sequelize, DataTypes } from "../config/database.js";

const Reservation = sequelize.define('Reservation', {
	id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
	space_id: { type: DataTypes.INTEGER, allowNull: false },
	user_id: { type: DataTypes.INTEGER, allowNull: false },
	start_time: { type: DataTypes.DATE, allowNull: false },
	end_time: { type: DataTypes.DATE, allowNull: false },
	status: { type: DataTypes.STRING(20), defaultValue: 'pending' },
	created_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
}, {
	tableName: 'reservation',
});


Reservation.associate = models => {
	Reservation.belongsTo(models.User, { foreignKey: 'user_id' });
	Reservation.belongsTo(models.Space, { foreignKey: 'space_id' });
	Reservation.hasMany(models.ReservationHistory, { foreignKey: 'reservation_id' });
};

export { Reservation }
