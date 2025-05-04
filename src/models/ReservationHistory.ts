import {
	Table, Column, Model, DataType, ForeignKey, BelongsTo, HasMany
} from 'sequelize-typescript';
import { User } from './User';
import { Reservation } from './Reservation';

@Table({
	tableName: 'reservation_history',
	timestamps: false,
	createdAt: false,
	updatedAt: false,
	schema: process.env.DB_SCHEMA
})

class ReservationHistory extends Model {
	@Column({
		type: DataType.INTEGER,
		primaryKey: true,
		autoIncrement: true
	})
	id!: number;

	@ForeignKey(() => Reservation)
	@Column({
		type: DataType.INTEGER,
		allowNull: false
	})
	reservation_id!: number;

	@Column({
		type: DataType.STRING(50),
		allowNull: false
	})
	action!: string;

	@Column({
		type: DataType.DATE,
		defaultValue: DataType.NOW
	})
	action_date!: Date;

	@ForeignKey(() => User)
	@Column({
		type: DataType.INTEGER,
	})
	action_user!: number;

	@Column(DataType.TEXT)
	details!: string | null;


	@BelongsTo(() => User)
	action_user_details!: User;

	@BelongsTo(() => Reservation)
	reservation_details!: Reservation;
}

// ReservationHistory.associate = models => {
// 	ReservationHistory.belongsTo(models.User, { foreignKey: 'action_user' });
// 	ReservationHistory.belongsTo(models.Reservation, { foreignKey: 'reservation_id' });
// };

export { ReservationHistory }
