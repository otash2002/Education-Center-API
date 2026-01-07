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
exports.CreateLessonDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreateLessonDto {
    groupId;
    title;
    description;
    lessonDate;
    startTime;
    endTime;
    roomNumber;
}
exports.CreateLessonDto = CreateLessonDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 1,
        description: 'Dars o‘tiladigan guruhning ID raqami'
    }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateLessonDto.prototype, "groupId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'NestJS-da DTO va Validation',
        description: 'Dars mavzusi',
        required: false
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateLessonDto.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Bugungi darsda Swagger va class-validator ishlatishni o‘rganamiz',
        description: 'Dars haqida qo‘shimcha ma’lumotlar',
        required: false
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateLessonDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '2024-02-15',
        description: 'Dars bo‘lib o‘tadigan sana (YYYY-MM-DD)'
    }),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], CreateLessonDto.prototype, "lessonDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '18:00',
        description: 'Dars boshlanish vaqti (HH:mm formatida)'
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateLessonDto.prototype, "startTime", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '20:00',
        description: 'Dars tugash vaqti (HH:mm formatida)'
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateLessonDto.prototype, "endTime", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Room 302',
        description: 'Xona raqami yoki nomi',
        required: false
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateLessonDto.prototype, "roomNumber", void 0);
//# sourceMappingURL=create-lesson.dto.js.map