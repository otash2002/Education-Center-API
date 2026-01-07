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
exports.CreateScheduleDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreateScheduleDto {
    groupId;
    day;
    startTime;
    endTime;
    roomNumber;
}
exports.CreateScheduleDto = CreateScheduleDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 1,
        description: 'Dars jadvali biriktiriladigan guruhning ID raqami'
    }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateScheduleDto.prototype, "groupId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Monday',
        enum: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        description: 'Hafta kuni'
    }),
    (0, class_validator_1.IsEnum)(['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']),
    __metadata("design:type", String)
], CreateScheduleDto.prototype, "day", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '14:00',
        description: 'Dars boshlanish vaqti (HH:mm formatida)'
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateScheduleDto.prototype, "startTime", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '16:00',
        description: 'Dars tugash vaqti (HH:mm formatida)'
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateScheduleDto.prototype, "endTime", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Room 204',
        description: 'Dars o‘tiladigan xona nomi yoki raqami'
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateScheduleDto.prototype, "roomNumber", void 0);
//# sourceMappingURL=create-schedule.dto.js.map