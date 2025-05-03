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
exports.SpaceResource = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const Space_1 = require("./Space");
const Resource_1 = require("./Resource");
let SpaceResource = class SpaceResource extends sequelize_typescript_1.Model {
};
exports.SpaceResource = SpaceResource;
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => Space_1.Space),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        primaryKey: true
    }),
    __metadata("design:type", Number)
], SpaceResource.prototype, "space_id", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => Resource_1.Resource),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        primaryKey: true
    }),
    __metadata("design:type", Number)
], SpaceResource.prototype, "resource_id", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        allowNull: false
    }),
    __metadata("design:type", Number)
], SpaceResource.prototype, "quantity", void 0);
exports.SpaceResource = SpaceResource = __decorate([
    (0, sequelize_typescript_1.Table)({
        tableName: 'space_resource',
        timestamps: false
    })
], SpaceResource);
