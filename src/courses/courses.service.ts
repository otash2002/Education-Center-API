import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateCourseDto, UpdateCourseDto } from './dto';

@Injectable()
export class CoursesService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createCourseDto: CreateCourseDto) {
    const course = await this.prisma.course.create({
      data: {
        name: createCourseDto.name,
        description: createCourseDto.description,
        price: createCourseDto.price,
        duration: createCourseDto.duration,
        level: createCourseDto.level?.toUpperCase() as any,
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

  async findOne(id: number) {
    const course = await this.prisma.course.findUnique({
      where: { id },
    });

    if (!course) {
      throw new NotFoundException('Course not found');
    }

    return {
      success: true,
      course,
    };
  }

  async update(id: number, updateCourseDto: UpdateCourseDto) {
    const course = await this.prisma.course.findUnique({
      where: { id },
    });

    if (!course) {
      throw new NotFoundException('Course not found');
    }

    const updateData: any = { ...updateCourseDto };
    if (updateCourseDto.level) {
      updateData.level = updateCourseDto.level.toUpperCase() as any;
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

  async remove(id: number) {
    const course = await this.prisma.course.findUnique({
      where: { id },
    });

    if (!course) {
      throw new NotFoundException('Course not found');
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
}
