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
exports.RegisterStudentDto = void 0;
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
class RegisterStudentDto {
    firstName;
    lastName;
    username;
    password;
    confirmPassword;
    phone;
    address;
    birthDate;
}
exports.RegisterStudentDto = RegisterStudentDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Aziz',
        description: 'O\'quvchining ismi',
        type: String,
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], RegisterStudentDto.prototype, "firstName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Ismoilov',
        description: 'O\'quvchining familiyasi',
        type: String,
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], RegisterStudentDto.prototype, "lastName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'aziz',
        description: 'Tizimga kirish uchun foydalanuvchi nomi',
        type: String,
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], RegisterStudentDto.prototype, "username", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'password123',
        description: 'Parol (minimal 6 ta belgi)',
        type: String,
        minLength: 6,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(6),
    __metadata("design:type", String)
], RegisterStudentDto.prototype, "password", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'password123',
        description: 'Parolni qayta kiriting (bir xil bo\'lishi kerak)',
        type: String,
        minLength: 6,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(6),
    __metadata("design:type", String)
], RegisterStudentDto.prototype, "confirmPassword", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        example: '+998901234567',
        description: 'Telefon raqami (Ozbekiston formati)',
        type: String,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsPhoneNumber)('UZ'),
    __metadata("design:type", String)
], RegisterStudentDto.prototype, "phone", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        example: 'Toshkent, Yunusobod',
        description: 'Manzil',
        type: String,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], RegisterStudentDto.prototype, "address", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        example: '2005-05-15',
        description: 'Tug\'ilgan sanasi (YYYY-MM-DD format)',
        type: String,
        format: 'date',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], RegisterStudentDto.prototype, "birthDate", void 0);
//# sourceMappingURL=register-student.dto.js.map