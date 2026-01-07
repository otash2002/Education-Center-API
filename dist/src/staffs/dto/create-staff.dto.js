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
exports.CreateStaffDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreateStaffDto {
    firstName;
    lastName;
    username;
    password;
    role;
    position;
    phone;
    address;
}
exports.CreateStaffDto = CreateStaffDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Alisher',
        description: 'Xodimning ismi'
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateStaffDto.prototype, "firstName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Navoiy',
        description: 'Xodimning familiyasi'
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateStaffDto.prototype, "lastName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'alisher_dev',
        description: 'Tizimga kirish uchun login (username)'
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateStaffDto.prototype, "username", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'pass123456',
        description: 'Kamida 6 ta belgidan iborat parol',
        minLength: 6
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(6),
    __metadata("design:type", String)
], CreateStaffDto.prototype, "password", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'teacher',
        enum: ['superadmin', 'admin', 'teacher'],
        description: 'Xodimning tizimdagi roli va ruxsat darajasi'
    }),
    (0, class_validator_1.IsEnum)(['superadmin', 'admin', 'teacher']),
    __metadata("design:type", String)
], CreateStaffDto.prototype, "role", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Matematika o‘qituvchisi',
        description: 'Xodimning lavozimi'
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateStaffDto.prototype, "position", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '+998901234567',
        description: 'O‘zbekiston telefon raqami formati',
        required: false
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsPhoneNumber)('UZ'),
    __metadata("design:type", String)
], CreateStaffDto.prototype, "phone", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Toshkent sh., Chilonzor tumani',
        description: 'Xodimning yashash manzili',
        required: false
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateStaffDto.prototype, "address", void 0);
//# sourceMappingURL=create-staff.dto.js.map