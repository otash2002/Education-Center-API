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
exports.CreateCourseDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreateCourseDto {
    name;
    description;
    price;
    duration;
    level;
}
exports.CreateCourseDto = CreateCourseDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Frontend Development',
        description: 'Kursning to‘liq nomi (masalan: Backend, Mobile)'
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateCourseDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'React va Next.js asosida zamonaviy interfeyslar yaratish',
        description: 'Kurs haqida batafsil ma’lumot',
        required: false
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateCourseDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 600000,
        description: 'Kursning bir oylik to‘lov summasi (so‘mda)'
    }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateCourseDto.prototype, "price", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 4,
        description: 'Kurs necha oy davom etishi'
    }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateCourseDto.prototype, "duration", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'beginner',
        enum: ['beginner', 'intermediate', 'advanced'],
        description: 'O‘quvchining bilim darajasi',
        required: false
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(['beginner', 'intermediate', 'advanced']),
    __metadata("design:type", String)
], CreateCourseDto.prototype, "level", void 0);
//# sourceMappingURL=create-course.dto.js.map