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
exports.UpdateStaffDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class UpdateStaffDto {
    firstName;
    lastName;
    password;
    position;
    phone;
    address;
    status;
}
exports.UpdateStaffDto = UpdateStaffDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Mansur',
        description: 'Xodim ismini o‘zgartirish',
        required: false
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateStaffDto.prototype, "firstName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Karimov',
        description: 'Xodim familiyasini o‘zgartirish',
        required: false
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateStaffDto.prototype, "lastName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'newpass123',
        description: 'Yangi parol (kamida 6 ta belgi)',
        required: false,
        minLength: 6
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(6),
    __metadata("design:type", String)
], UpdateStaffDto.prototype, "password", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Senior Teacher',
        description: 'Lavozimni yangilash',
        required: false
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateStaffDto.prototype, "position", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '+998909876543',
        description: 'Yangi telefon raqami (+998 formatida)',
        required: false
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsPhoneNumber)('UZ'),
    __metadata("design:type", String)
], UpdateStaffDto.prototype, "phone", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Toshkent sh., Yunusobod tumani',
        description: 'Yangi yashash manzili',
        required: false
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateStaffDto.prototype, "address", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'active',
        enum: ['active', 'inactive'],
        description: 'Xodimning tizimdagi holati',
        required: false
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(['active', 'inactive']),
    __metadata("design:type", String)
], UpdateStaffDto.prototype, "status", void 0);
//# sourceMappingURL=update-staff.dto.js.map