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
exports.LessonsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let LessonsService = class LessonsService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createLessonDto, staffId) {
        const lesson = await this.prisma.lesson.create({
            data: {
                groupId: createLessonDto.groupId,
                title: createLessonDto.title || 'Dars',
                description: createLessonDto.description,
                lessonDate: new Date(createLessonDto.lessonDate),
                startTime: createLessonDto.startTime,
                endTime: createLessonDto.endTime,
                roomNumber: createLessonDto.roomNumber,
                createdBy: staffId,
            },
            include: { group: true },
        });
        return {
            success: true,
            message: 'Lesson created successfully',
            lesson,
        };
    }
    async findAll() {
        const lessons = await this.prisma.lesson.findMany({
            include: { group: true },
        });
        return {
            success: true,
            count: lessons.length,
            lessons,
        };
    }
    async findOne(id) {
        const lesson = await this.prisma.lesson.findUnique({
            where: { id },
            include: { group: true },
        });
        if (!lesson) {
            throw new common_1.NotFoundException('Lesson not found');
        }
        return {
            success: true,
            lesson,
        };
    }
    async update(id, updateLessonDto) {
        const lesson = await this.prisma.lesson.findUnique({
            where: { id },
        });
        if (!lesson) {
            throw new common_1.NotFoundException('Lesson not found');
        }
        const updateData = { ...updateLessonDto };
        if (updateLessonDto.lessonDate) {
            updateData.lessonDate = new Date(updateLessonDto.lessonDate);
        }
        const updatedLesson = await this.prisma.lesson.update({
            where: { id },
            data: updateData,
            include: { group: true },
        });
        return {
            success: true,
            message: 'Lesson updated successfully',
            lesson: updatedLesson,
        };
    }
    async remove(id) {
        const lesson = await this.prisma.lesson.findUnique({
            where: { id },
        });
        if (!lesson) {
            throw new common_1.NotFoundException('Lesson not found');
        }
        await this.prisma.lesson.delete({
            where: { id },
        });
        return {
            success: true,
            message: 'Lesson deleted successfully',
            deletedLesson: {
                id: lesson.id,
                title: lesson.title,
            },
        };
    }
};
exports.LessonsService = LessonsService;
exports.LessonsService = LessonsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], LessonsService);
//# sourceMappingURL=lessons.service.js.map