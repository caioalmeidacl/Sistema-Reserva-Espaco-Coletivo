import {
	Table, Column, Model, DataType, HasMany, BeforeCreate
} from 'sequelize-typescript';
import { Reservation } from './Reservation';

enum UserRole {
	REGULAR = 'regular',
	ADMIN = 'admin',
	MANAGER = 'manager'
}

@Table({
	tableName: 'users',
	timestamps: true,
	createdAt: 'created_at',
	updatedAt: 'updated_at',
	schema: process.env.DB_SCHEMA
})

class User extends Model {
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
		type: DataType.STRING(100),
		allowNull: false,
		unique: true,
		validate: {
			isEmail: true
		}
	})
	email!: string;

	@Column({
		type: DataType.STRING(255),
		allowNull: false
	})
	password!: string;

	@Column({
		type: DataType.STRING(20),
		allowNull: true,
	})
	phone!: string | null;

	@Column({
		type: DataType.ENUM(...Object.values(UserRole)),
		allowNull: false,
		defaultValue: UserRole.REGULAR
	})
	role!: UserRole;

	@HasMany(() => Reservation)
	reservations!: Reservation[];
}


// User.associate = models => {
// 	User.hasMany(models.Space, { foreignKey: 'manager_id' });
// 	User.hasMany(models.Reservation, { foreignKey: 'user_id' });
// 	User.hasMany(models.ReservationHistory, { foreignKey: 'action_user' })
// }

export { User }
