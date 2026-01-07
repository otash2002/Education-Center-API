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
exports.CreateAttendanceDto = exports.AttendanceDetailDto = void 0;
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
class AttendanceDetailDto {
    studentId;
    status;
    comment;
}
exports.AttendanceDetailDto = AttendanceDetailDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1, description: 'O\'quvchi ID' }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], AttendanceDetailDto.prototype, "studentId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'present', enum: ['present', 'absent', 'late'] }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], AttendanceDetailDto.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Vaqtida', required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], AttendanceDetailDto.prototype, "comment", void 0);
class CreateAttendanceDto {
    lessonId;
    attendances;
}
exports.CreateAttendanceDto = CreateAttendanceDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1, description: 'Dars ID' }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateAttendanceDto.prototype, "lessonId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: () => [AttendanceDetailDto],
        description: 'Davomatlar ro\'yxati',
    }),
    (0, class_validator_1.IsArray)(),
    __metadata("design:type", Array)
], CreateAttendanceDto.prototype, "attendances", void 0);
//# sourceMappingURL=create-attendance.dto.js.map