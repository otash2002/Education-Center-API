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
exports.UpdateGroupDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class UpdateGroupDto {
    name;
    teacherId;
    startDate;
    endDate;
    schedule;
    maxStudents;
    status;
}
exports.UpdateGroupDto = UpdateGroupDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'NodeJS-001 (Kuzgi)',
        description: 'Guruhning yangilangan nomi',
        required: false
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateGroupDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 3,
        description: 'Yangi tayinlangan o‘qituvchi ID raqami',
        required: false
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], UpdateGroupDto.prototype, "teacherId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '2024-03-01',
        description: 'O‘zgartirilgan boshlanish sanasi (YYYY-MM-DD)',
        required: false
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], UpdateGroupDto.prototype, "startDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '2024-09-01',
        description: 'O‘zgartirilgan tugash sanasi (YYYY-MM-DD)',
        required: false
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], UpdateGroupDto.prototype, "endDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Ses-Pay-Shanba, 14:00-16:00',
        description: 'Yangi dars jadvali',
        required: false
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateGroupDto.prototype, "schedule", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 25,
        description: 'O‘quvchilar soni limitini o‘zgartirish',
        required: false
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], UpdateGroupDto.prototype, "maxStudents", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'active',
        enum: ['planned', 'active', 'completed'],
        description: 'Guruhning joriy holati (statusi)',
        required: false
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(['planned', 'active', 'completed']),
    __metadata("design:type", String)
], UpdateGroupDto.prototype, "status", void 0);
//# sourceMappingURL=update-group.dto.js.map