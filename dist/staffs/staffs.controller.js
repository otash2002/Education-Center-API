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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StaffsController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const jwt_auth_guard_1 = require("../common/guards/jwt-auth.guard");
const roles_guard_1 = require("../common/guards/roles.guard");
const roles_decorator_1 = require("../common/decorators/roles.decorator");
const staffs_service_1 = require("./staffs.service");
const dto_1 = require("./dto");
let StaffsController = class StaffsController {
    staffsService;
    constructor(staffsService) {
        this.staffsService = staffsService;
    }
    async create(createStaffDto) {
        return this.staffsService.create(createStaffDto);
    }
    async findAll() {
        return this.staffsService.findAll();
    }
    async findOne(id) {
        return this.staffsService.findOne(+id);
    }
    async remove(id) {
        return this.staffsService.remove(+id);
    }
};
exports.StaffsController = StaffsController;
__decorate([
    (0, common_1.Post)(),
    (0, common_1.HttpCode)(201),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)('ADMIN', 'SUPERADMIN'),
    (0, swagger_1.ApiOperation)({
        summary: 'Yangi xodim yaratish',
        description: 'Faqat ADMIN va SUPERADMIN yaratishi mumkin',
    }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Xodim yaratildi' }),
    (0, swagger_1.ApiResponse)({ status: 403, description: 'Ruxsat yo\'q' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.CreateStaffDto]),
    __metadata("design:returntype", Promise)
], StaffsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)('ADMIN', 'SUPERADMIN'),
    (0, swagger_1.ApiOperation)({
        summary: 'Barcha xodimlarni olish',
        description: 'Faqat ADMIN va SUPERADMIN ko\'rishi mumkin',
    }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Xodimlar ro\'yxati' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], StaffsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)('ADMIN', 'SUPERADMIN'),
    (0, swagger_1.ApiOperation)({
        summary: 'Xodimni ID orqali olish',
        description: 'Faqat ADMIN va SUPERADMIN ko\'rishi mumkin',
    }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], StaffsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)('SUPERADMIN'),
    (0, common_1.HttpCode)(200),
    (0, swagger_1.ApiOperation)({
        summary: 'Xodimni o\'chirish',
        description: 'Faqat SUPERADMIN o\'chirishi mumkin',
    }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Xodim o\'chirildi' }),
    (0, swagger_1.ApiResponse)({ status: 403, description: 'Faqat SUPERADMIN' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], StaffsController.prototype, "remove", null);
exports.StaffsController = StaffsController = __decorate([
    (0, swagger_1.ApiTags)('Staffs'),
    (0, common_1.Controller)('staffs'),
    (0, swagger_1.ApiBearerAuth)(),
    __metadata("design:paramtypes", [staffs_service_1.StaffsService])
], StaffsController);
//# sourceMappingURL=staffs.controller.js.map