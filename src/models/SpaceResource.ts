import {
	Table, Column, Model, DataType, ForeignKey, BelongsTo, HasMany
} from 'sequelize-typescript';
import { Space } from './Space';
import { Resource } from './Resource';


@Table({
	tableName: 'space_resource',
	timestamps: false,
	schema: process.env.DB_SCHEMA
})

class SpaceResource extends Model {
	@ForeignKey(() => Space)
	@Column({
		type: DataType.INTEGER,
		primaryKey: true
	})
	space_id!: number;

	@ForeignKey(() => Resource)
	@Column({
		type: DataType.INTEGER,
		primaryKey: true
	})
	resource_id!: number;

	@Column({
		type: DataType.INTEGER,
		allowNull: false
	})
	quantity!: number;
}

export { SpaceResource }
