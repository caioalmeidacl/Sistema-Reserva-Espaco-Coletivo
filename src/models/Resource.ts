import {
	Table, Column, Model, DataType, ForeignKey, BelongsTo, HasMany
} from 'sequelize-typescript';
import { User } from './User';
import { SpaceResource } from './SpaceResource';

enum ResourceType {
	ROOM = 'room',
	EQUIPMENT = 'equipment',
	VEHICLE = 'vehicle'
}

@Table({
	tableName: 'resources',
	timestamps: true,
	createdAt: 'created_at',
	updatedAt: 'updated_at',
	schema: process.env.DB_SCHEMA
})

class Resource extends Model {
	@Column({
		type: DataType.INTEGER,
		primaryKey: true,
		autoIncrement: true
	})
	id!: number;

	@Column({
		type: DataType.STRING(100),
		allowNull: false
	})
	name!: string;

	@Column({
		type: DataType.ENUM(...Object.values(ResourceType)),
		allowNull: false
	})
	type!: ResourceType;

	@Column(DataType.TEXT)
	description!: string | null;

	@Column({
		type: DataType.INTEGER,
		allowNull: false,
		validate: {
			min: 1
		}
	})
	capacity!: number;

	@ForeignKey(() => User)
	@Column({
		type: DataType.INTEGER,
		allowNull: false
	})
	manager_id!: number;

	@BelongsTo(() => User)
	manager!: User;

	@HasMany(() => SpaceResource)
	spaceResources!: SpaceResource[];
}

export { Resource }
