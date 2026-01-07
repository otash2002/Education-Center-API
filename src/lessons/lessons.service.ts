import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateLessonDto, UpdateLessonDto } from './dto';

@Injectable()
export class LessonsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createLessonDto: CreateLessonDto, staffId: number) {
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

  async findOne(id: number) {
    const lesson = await this.prisma.lesson.findUnique({
      where: { id },
      include: { group: true },
    });

    if (!lesson) {
      throw new NotFoundException('Lesson not found');
    }

    return {
      success: true,
      lesson,
    };
  }

  async update(id: number, updateLessonDto: UpdateLessonDto) {
    const lesson = await this.prisma.lesson.findUnique({
      where: { id },
    });

    if (!lesson) {
      throw new NotFoundException('Lesson not found');
    }

    const updateData: any = { ...updateLessonDto };
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

  async remove(id: number) {
    const lesson = await this.prisma.lesson.findUnique({
      where: { id },
    });

    if (!lesson) {
      throw new NotFoundException('Lesson not found');
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
}
