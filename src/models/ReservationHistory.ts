import {
	Table, Column, Model, DataType, ForeignKey, BelongsTo, HasMany
} from 'sequelize-typescript';
import { User } from './User';
import { Space } from './Space';

@Table({
	tableName: 'reservation_history',
	timestamps: false,
	createdAt: false,
	updatedAt: false
})

class ReservationHistory extends Model {
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

	@BelongsTo(() => Space)
	reservation_details!: Space;
}

export { ReservationHistory }
