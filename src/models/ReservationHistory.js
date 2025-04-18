import { sequelize, DataTypes } from "../config/database.js";

const ReservationHistory = sequelize.define('ReservationHistory', {
	history_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
	reservation_id: { type: DataTypes.INTEGER, allowNull: false },
	action: { type: DataTypes.STRING(50), allowNull: false },
	action_date: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
	action_user: { type: DataTypes.INTEGER },
	details: { type: DataTypes.TEXT }
}, {
	tableName: 'reservation_history',
	timestamps: false
});

ReservationHistory.associate = models => {
	ReservationHistory.belongsTo(models.User, { foreignKey: 'action_user' });
	ReservationHistory.belongsTo(models.Reservation, { foreignKey: 'reservation_id' });
};

export { ReservationHistory }
