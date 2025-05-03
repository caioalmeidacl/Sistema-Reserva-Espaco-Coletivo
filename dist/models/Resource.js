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
exports.Resource = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const User_1 = require("./User");
const SpaceResource_1 = require("./SpaceResource");
var ResourceType;
(function (ResourceType) {
    ResourceType["ROOM"] = "room";
    ResourceType["EQUIPMENT"] = "equipment";
    ResourceType["VEHICLE"] = "vehicle";
})(ResourceType || (ResourceType = {}));
let Resource = class Resource extends sequelize_typescript_1.Model {
};
exports.Resource = Resource;
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true
    }),
    __metadata("design:type", Number)
], Resource.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING(100),
        allowNull: false
    }),
    __metadata("design:type", String)
], Resource.prototype, "name", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.ENUM(...Object.values(ResourceType)),
        allowNull: false
    }),
    __metadata("design:type", String)
], Resource.prototype, "type", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.TEXT),
    __metadata("design:type", Object)
], Resource.prototype, "description", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        allowNull: false,
        validate: {
            min: 1
        }
    }),
    __metadata("design:type", Number)
], Resource.prototype, "capacity", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => User_1.User),
    __metadata("design:type", User_1.User)
], Resource.prototype, "manager", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => SpaceResource_1.SpaceResource),
    __metadata("design:type", Array)
], Resource.prototype, "spaceResources", void 0);
exports.Resource = Resource = __decorate([
    (0, sequelize_typescript_1.Table)({
        tableName: 'resources',
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    })
], Resource);
