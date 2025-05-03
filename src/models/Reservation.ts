import {
	Table, Column, Model, DataType, ForeignKey, BelongsTo, HasMany
} from 'sequelize-typescript';
import { User } from './User';
import { Space } from './Space';
import { ReservationHistory } from './ReservationHistory';


enum ReservationStatus {
	PENDING = 'pending',
}

@Table({
	tableName: 'reservations',
	timestamps: false,
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
}

export { Reservation, ReservationStatus }
