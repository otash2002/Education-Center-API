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
exports.GroupsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let GroupsService = class GroupsService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createGroupDto) {
        const group = await this.prisma.group.create({
            data: {
                name: createGroupDto.name,
                courseId: createGroupDto.courseId,
                teacherId: createGroupDto.teacherId,
                startDate: new Date(createGroupDto.startDate),
                endDate: createGroupDto.endDate ? new Date(createGroupDto.endDate) : null,
                schedule: createGroupDto.schedule,
                maxStudents: createGroupDto.maxStudents || 20,
                status: 'PLANNED',
            },
            include: { course: true, teacher: true },
        });
        return {
            success: true,
            message: 'Group created successfully',
            group,
        };
    }
    async findAll() {
        const groups = await this.prisma.group.findMany({
            include: { course: true, teacher: true },
        });
        return {
            success: true,
            count: groups.length,
            groups,
        };
    }
    async findOne(id) {
        const group = await this.prisma.group.findUnique({
            where: { id },
            include: { course: true, teacher: true },
        });
        if (!group) {
            throw new common_1.NotFoundException('Group not found');
        }
        return {
            success: true,
            group,
        };
    }
    async update(id, updateGroupDto) {
        const group = await this.prisma.group.findUnique({
            where: { id },
        });
        if (!group) {
            throw new common_1.NotFoundException('Group not found');
        }
        const updateData = { ...updateGroupDto };
        if (updateGroupDto.startDate) {
            updateData.startDate = new Date(updateGroupDto.startDate);
        }
        if (updateGroupDto.endDate) {
            updateData.endDate = new Date(updateGroupDto.endDate);
        }
        const updatedGroup = await this.prisma.group.update({
            where: { id },
            data: updateData,
            include: { course: true, teacher: true },
        });
        return {
            success: true,
            message: 'Group updated successfully',
            group: updatedGroup,
        };
    }
    async remove(id) {
        const group = await this.prisma.group.findUnique({
            where: { id },
        });
        if (!group) {
            throw new common_1.NotFoundException('Group not found');
        }
        await this.prisma.group.delete({
            where: { id },
        });
        return {
            success: true,
            message: 'Group deleted successfully',
            deletedGroup: {
                id: group.id,
                name: group.name,
            },
        };
    }
};
exports.GroupsService = GroupsService;
exports.GroupsService = GroupsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], GroupsService);
//# sourceMappingURL=groups.service.js.map