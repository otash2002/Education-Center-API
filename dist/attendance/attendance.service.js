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
exports.AttendanceService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let AttendanceService = class AttendanceService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createAttendanceDto, staffId) {
        const attendance = await this.prisma.attendance.create({
            data: {
                lessonId: createAttendanceDto.lessonId,
                createdBy: staffId,
                details: {
                    create: createAttendanceDto.attendances.map((att) => ({
                        studentId: att.studentId,
                        status: att.status.toUpperCase(),
                        comment: att.comment,
                    })),
                },
            },
            include: {
                details: {
                    include: { student: true },
                },
            },
        });
        return {
            success: true,
            message: 'Attendance recorded successfully',
            attendance,
        };
    }
    async findAll() {
        const attendances = await this.prisma.attendance.findMany({
            include: {
                details: {
                    include: { student: true },
                },
            },
        });
        return {
            success: true,
            count: attendances.length,
            attendances,
        };
    }
    async findOne(id) {
        const attendance = await this.prisma.attendance.findUnique({
            where: { id },
            include: {
                details: {
                    include: { student: true },
                },
            },
        });
        if (!attendance) {
            throw new common_1.NotFoundException('Attendance not found');
        }
        return {
            success: true,
            attendance,
        };
    }
    async remove(id) {
        const attendance = await this.prisma.attendance.findUnique({
            where: { id },
        });
        if (!attendance) {
            throw new common_1.NotFoundException('Attendance not found');
        }
        await this.prisma.attendance.delete({
            where: { id },
        });
        return {
            success: true,
            message: 'Attendance deleted successfully',
            deletedAttendance: {
                id: attendance.id,
                lessonId: attendance.lessonId,
            },
        };
    }
};
exports.AttendanceService = AttendanceService;
exports.AttendanceService = AttendanceService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], AttendanceService);
//# sourceMappingURL=attendance.service.js.map