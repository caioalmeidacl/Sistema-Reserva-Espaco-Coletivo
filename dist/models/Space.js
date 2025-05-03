"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpaceType = exports.Space = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const User_1 = require("./User");
const Reservation_1 = require("./Reservation");
const SpaceResource_1 = require("./SpaceResource");
var SpaceType;
(function (SpaceType) {
    SpaceType["MEETING_ROOM"] = "meeting_room";
    SpaceType["SPORTS_COURT"] = "sports_court";
    SpaceType["AUDITORIUM"] = "auditorium";
    SpaceType["COWORKING"] = "coworking";
})(SpaceType || (exports.SpaceType = SpaceType = {}));
let Space = class Space extends sequelize_typescript_1.Model {
};
exports.Space = Space;
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true
    }),
    __metadata("design:type", Number)
], Space.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING(100),
        allowNull: false,
        unique: true
    }),
    __metadata("design:type", String)
], Space.prototype, "name", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.ENUM(...Object.values(SpaceType)),
        allowNull: false
    }),
    __metadata("design:type", String)
], Space.prototype, "type", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        allowNull: false,
        validate: {
            min: 1
        }
    }),
    __metadata("design:type", Number)
], Space.prototype, "capacity", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.TEXT),
    __metadata("design:type", Object)
], Space.prototype, "description", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.BOOLEAN,
        allowNull: false,
        defaultValue: true
    }),
    __metadata("design:type", Boolean)
], Space.prototype, "is_active", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => User_1.User),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        allowNull: false
    }),
    __metadata("design:type", Number)
], Space.prototype, "manager_id", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => User_1.User),
    __metadata("design:type", User_1.User)
], Space.prototype, "manager", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => Reservation_1.Reservation),
    __metadata("design:type", Array)
], Space.prototype, "reservations", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => SpaceResource_1.SpaceResource),
    __metadata("design:type", Array)
], Space.prototype, "space_resources", void 0);
exports.Space = Space = __decorate([
    (0, sequelize_typescript_1.Table)({
        tableName: 'spaces',
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    })
], Space);
