"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StaffsService = void 0;
const common_1 = require("@nestjs/common");
const bcrypt = __importStar(require("bcrypt"));
const prisma_service_1 = require("../prisma/prisma.service");
let StaffsService = class StaffsService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createStaffDto) {
        const { username, password, firstName, lastName, role, position, phone, address } = createStaffDto;
        const existingStaff = await this.prisma.staff.findUnique({
            where: { username },
        });
        if (existingStaff) {
            throw new common_1.BadRequestException('Username already exists');
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const staff = await this.prisma.staff.create({
            data: {
                firstName,
                lastName,
                username,
                password: hashedPassword,
                role: role.toUpperCase(),
                position,
                phone,
                address,
            },
        });
        const { password: _, ...staffWithoutPassword } = staff;
        return {
            success: true,
            message: 'Staff created successfully',
            staff: staffWithoutPassword,
        };
    }
    async findAll() {
        const staffs = await this.prisma.staff.findMany({
            select: {
                id: true,
                firstName: true,
                lastName: true,
                username: true,
                role: true,
                position: true,
                phone: true,
                address: true,
                hireDate: true,
                status: true,
                createdAt: true,
                updatedAt: true,
            },
        });
        return {
            success: true,
            count: staffs.length,
            staffs,
        };
    }
    async findOne(id) {
        const staff = await this.prisma.staff.findUnique({
            where: { id },
            select: {
                id: true,
                firstName: true,
                lastName: true,
                username: true,
                role: true,
                position: true,
                phone: true,
                address: true,
                hireDate: true,
                status: true,
                createdAt: true,
                updatedAt: true,
            },
        });
        if (!staff) {
            throw new common_1.NotFoundException('Staff not found');
        }
        return {
            success: true,
            staff,
        };
    }
    async remove(id) {
        const staff = await this.prisma.staff.findUnique({
            where: { id },
        });
        if (!staff) {
            throw new common_1.NotFoundException('Staff not found');
        }
        await this.prisma.staff.delete({
            where: { id },
        });
        return {
            success: true,
            message: 'Staff deleted successfully',
            deletedStaff: {
                id: staff.id,
                firstName: staff.firstName,
                lastName: staff.lastName,
                username: staff.username,
            },
        };
    }
    async update(id, updateStaffDto) {
        const staff = await this.prisma.staff.findUnique({
            where: { id },
        });
        if (!staff) {
            throw new common_1.NotFoundException('Staff not found');
        }
        const updateData = { ...updateStaffDto };
        if (updateStaffDto.password) {
            updateData.password = await bcrypt.hash(updateStaffDto.password, 10);
        }
        const updatedStaff = await this.prisma.staff.update({
            where: { id },
            data: updateData,
            select: {
                id: true,
                firstName: true,
                lastName: true,
                username: true,
                role: true,
                position: true,
                phone: true,
                address: true,
                hireDate: true,
                status: true,
            },
        });
        return {
            success: true,
            message: 'Staff updated successfully',
            staff: updatedStaff,
        };
    }
};
exports.StaffsService = StaffsService;
exports.StaffsService = StaffsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], StaffsService);
//# sourceMappingURL=staffs.service.js.map