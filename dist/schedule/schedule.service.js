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
exports.ScheduleService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let ScheduleService = class ScheduleService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createScheduleDto) {
        const schedule = await this.prisma.schedule.create({
            data: {
                groupId: createScheduleDto.groupId,
                day: createScheduleDto.day.toUpperCase(),
                startTime: createScheduleDto.startTime,
                endTime: createScheduleDto.endTime,
                roomNumber: createScheduleDto.roomNumber,
            },
            include: { group: true },
        });
        return {
            success: true,
            message: 'Schedule created successfully',
            schedule,
        };
    }
    async findAll() {
        const schedules = await this.prisma.schedule.findMany({
            include: { group: true },
        });
        return {
            success: true,
            count: schedules.length,
            schedules,
        };
    }
    async findOne(id) {
        const schedule = await this.prisma.schedule.findUnique({
            where: { id },
            include: { group: true },
        });
        if (!schedule) {
            throw new common_1.NotFoundException('Schedule not found');
        }
        return {
            success: true,
            schedule,
        };
    }
    async update(id, updateScheduleDto) {
        const schedule = await this.prisma.schedule.findUnique({
            where: { id },
        });
        if (!schedule) {
            throw new common_1.NotFoundException('Schedule not found');
        }
        const updateData = { ...updateScheduleDto };
        if (updateScheduleDto.day) {
            updateData.day = updateScheduleDto.day.toUpperCase();
        }
        const updatedSchedule = await this.prisma.schedule.update({
            where: { id },
            data: updateData,
            include: { group: true },
        });
        return {
            success: true,
            message: 'Schedule updated successfully',
            schedule: updatedSchedule,
        };
    }
    async remove(id) {
        const schedule = await this.prisma.schedule.findUnique({
            where: { id },
        });
        if (!schedule) {
            throw new common_1.NotFoundException('Schedule not found');
        }
        await this.prisma.schedule.delete({
            where: { id },
        });
        return {
            success: true,
            message: 'Schedule deleted successfully',
            deletedSchedule: {
                id: schedule.id,
                day: schedule.day,
            },
        };
    }
};
exports.ScheduleService = ScheduleService;
exports.ScheduleService = ScheduleService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ScheduleService);
//# sourceMappingURL=schedule.service.js.map