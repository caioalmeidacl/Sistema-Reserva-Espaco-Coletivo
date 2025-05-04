import {
	Table, Column, Model, DataType, ForeignKey, BelongsTo, HasMany
} from 'sequelize-typescript';
import { User } from './User';
import { Reservation } from './Reservation';
import { SpaceResource } from './SpaceResource';

enum SpaceType {
	MEETING_ROOM = 'meeting_room',
	SPORTS_COURT = 'sports_court',
	AUDITORIUM = 'auditorium',
	COWORKING = 'coworking'
}

@Table({
	tableName: 'spaces',
	timestamps: true,
	createdAt: 'created_at',
	updatedAt: 'updated_at',
	schema: process.env.DB_SCHEMA
})

class Space extends Model {
	@Column({
		type: DataType.INTEGER,
		primaryKey: true,
		autoIncrement: true
	})
	id!: number;

	@Column({
		type: DataType.STRING(100),
		allowNull: false,
		unique: true
	})
	name!: string;

	@Column({
		type: DataType.ENUM(...Object.values(SpaceType)),
		allowNull: false
	})
	type!: SpaceType;

	@Column({
		type: DataType.INTEGER,
		allowNull: false,
		validate: {
			min: 1
		}
	})
	capacity!: number;

	@Column(DataType.TEXT)
	description!: string | null;

	@Column({
		type: DataType.BOOLEAN,
		allowNull: false,
		defaultValue: true
	})
	is_active!: boolean;

	@ForeignKey(() => User)
	@Column({
		type: DataType.INTEGER,
		allowNull: false
	})
	manager_id!: number;

	@BelongsTo(() => User)
	manager!: User;

	@HasMany(() => Reservation)
	reservations!: Reservation[];

	@HasMany(() => SpaceResource)
	space_resources!: SpaceResource[];
}

export { Space, SpaceType };
