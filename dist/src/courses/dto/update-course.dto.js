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
exports.UpdateCourseDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class UpdateCourseDto {
    name;
    description;
    price;
    duration;
    level;
    isActive;
}
exports.UpdateCourseDto = UpdateCourseDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Web Dasturlash (Update)',
        description: 'Kursning yangi nomi',
        required: false
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateCourseDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Yangi texnologiyalar qo‘shilgan kurs tavsifi',
        description: 'Kurs haqida qo‘shimcha ma’lumot',
        required: false
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateCourseDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 900000,
        description: 'Yangi kurs narxi',
        required: false
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], UpdateCourseDto.prototype, "price", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 6,
        description: 'Kurs davomiyligi (oyda)',
        required: false
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], UpdateCourseDto.prototype, "duration", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'advanced',
        enum: ['beginner', 'intermediate', 'advanced'],
        description: 'Kursning qiyinchilik darajasini o‘zgartirish',
        required: false
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(['beginner', 'intermediate', 'advanced']),
    __metadata("design:type", String)
], UpdateCourseDto.prototype, "level", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: true,
        description: 'Kurs faolligini boshqarish (active/inactive)',
        required: false
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], UpdateCourseDto.prototype, "isActive", void 0);
//# sourceMappingURL=update-course.dto.js.map