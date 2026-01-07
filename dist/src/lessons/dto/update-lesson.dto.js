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
exports.UpdateLessonDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class UpdateLessonDto {
    title;
    description;
    lessonDate;
    startTime;
    endTime;
    roomNumber;
}
exports.UpdateLessonDto = UpdateLessonDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'NestJS-da DTO va Validation (Yangilangan)',
        description: 'Dars mavzusini o‘zgartirish',
        required: false
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateLessonDto.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Dars mavzusi kengaytirildi, yangi amaliy topshiriqlar qo‘shildi.',
        description: 'Dars tavsifini yangilash',
        required: false
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateLessonDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '2024-02-16',
        description: 'Dars kunini boshqa sanaga ko‘chirish (YYYY-MM-DD)',
        required: false
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], UpdateLessonDto.prototype, "lessonDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '19:00',
        description: 'Dars boshlanish vaqtini o‘zgartirish (HH:mm)',
        required: false
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateLessonDto.prototype, "startTime", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '21:00',
        description: 'Dars tugash vaqtini o‘zgartirish (HH:mm)',
        required: false
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateLessonDto.prototype, "endTime", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Online (Zoom)',
        description: 'Xona raqami yoki dars o‘tiladigan joyni o‘zgartirish',
        required: false
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateLessonDto.prototype, "roomNumber", void 0);
//# sourceMappingURL=update-lesson.dto.js.map