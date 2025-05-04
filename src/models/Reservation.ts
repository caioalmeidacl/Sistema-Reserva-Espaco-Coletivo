import {
	Table, Column, Model, DataType, ForeignKey, BelongsTo, HasMany, BeforeDestroy
} from 'sequelize-typescript';
import { Sequelize } from 'sequelize';
import { sequelize } from '../config/database';
import { User } from './User';
import { Space } from './Space';
import { ReservationHistory } from './ReservationHistory';


enum ReservationStatus {
	PENDING = 'pending',
	APPROVED = 'approved',
	CANCELLED = 'cancelled',
	COMPLETED = 'completed',
	REJECTED = 'rejected',
}

@Table({
	tableName: 'reservations',
	timestamps: true,
	paranoid: true,
	schema: process.env.DB_SCHEMA
})

class Reservation extends Model {
	@Column({
		type: DataType.INTEGER,
		primaryKey: true,
		autoIncrement: true
	})
	id!: number;

	@ForeignKey(() => Space)
	@Column({
		type: DataType.INTEGER,
		allowNull: false
	})
	space_id!: number;

	@ForeignKey(() => User)
	@Column({
		type: DataType.INTEGER,
		allowNull: false
	})
	user_id!: number;

	@Column({
		type: DataType.DATE,
		allowNull: false
	})
	start_time!: Date;

	@Column({
		type: DataType.DATE,
		allowNull: false
	})
	end_time!: Date;

	@Column({
		type: DataType.ENUM(...Object.values(ReservationStatus)),
		defaultValue: 'pending'
	})
	status!: ReservationStatus;

	@Column({
		type: DataType.DATE,
		defaultValue: DataType.NOW
	})
	created_at!: Date;


	@BelongsTo(() => User)
	user!: User;

	@BelongsTo(() => Space)
	space!: Space;

	@HasMany(() => ReservationHistory)
	reservations!: ReservationHistory[]


	@BeforeDestroy
	static async logDeletion(instance: Reservation) {
		await ReservationHistory.create({
			reservation_id: instance.id,
			action: ReservationStatus.CANCELLED,
			action_date: new Date(),
			action_user: instance.user_id,
			details: 'Reservation cancelled',
			original_data: JSON.stringify(instance.toJSON())
		});
	}
}

export { Reservation, ReservationStatus }
