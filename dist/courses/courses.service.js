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
exports.CoursesService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let CoursesService = class CoursesService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createCourseDto) {
        const course = await this.prisma.course.create({
            data: {
                name: createCourseDto.name,
                description: createCourseDto.description,
                price: createCourseDto.price,
                duration: createCourseDto.duration,
                level: createCourseDto.level?.toUpperCase(),
                isActive: true,
            },
        });
        return {
            success: true,
            message: 'Course created successfully',
            course,
        };
    }
    async findAll() {
        const courses = await this.prisma.course.findMany({
            where: { isActive: true },
        });
        return {
            success: true,
            count: courses.length,
            courses,
        };
    }
    async findOne(id) {
        const course = await this.prisma.course.findUnique({
            where: { id },
        });
        if (!course) {
            throw new common_1.NotFoundException('Course not found');
        }
        return {
            success: true,
            course,
        };
    }
    async update(id, updateCourseDto) {
        const course = await this.prisma.course.findUnique({
            where: { id },
        });
        if (!course) {
            throw new common_1.NotFoundException('Course not found');
        }
        const updateData = { ...updateCourseDto };
        if (updateCourseDto.level) {
            updateData.level = updateCourseDto.level.toUpperCase();
        }
        const updatedCourse = await this.prisma.course.update({
            where: { id },
            data: updateData,
        });
        return {
            success: true,
            message: 'Course updated successfully',
            course: updatedCourse,
        };
    }
    async remove(id) {
        const course = await this.prisma.course.findUnique({
            where: { id },
        });
        if (!course) {
            throw new common_1.NotFoundException('Course not found');
        }
        await this.prisma.course.delete({
            where: { id },
        });
        return {
            success: true,
            message: 'Course deleted successfully',
            deletedCourse: {
                id: course.id,
                name: course.name,
            },
        };
    }
};
exports.CoursesService = CoursesService;
exports.CoursesService = CoursesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], CoursesService);
//# sourceMappingURL=courses.service.js.map