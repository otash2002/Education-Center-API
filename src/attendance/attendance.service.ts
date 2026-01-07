import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateAttendanceDto } from './dto';

@Injectable()
export class AttendanceService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createAttendanceDto: CreateAttendanceDto, staffId: number) {
    // Create attendance record
    const attendance = await this.prisma.attendance.create({
      data: {
        lessonId: createAttendanceDto.lessonId,
        createdBy: staffId,
        details: {
          create: createAttendanceDto.attendances.map((att) => ({
            studentId: att.studentId,
            status: att.status.toUpperCase() as any,
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

  async findOne(id: number) {
    const attendance = await this.prisma.attendance.findUnique({
      where: { id },
      include: {
        details: {
          include: { student: true },
        },
      },
    });

    if (!attendance) {
      throw new NotFoundException('Attendance not found');
    }

    return {
      success: true,
      attendance,
    };
  }

  async remove(id: number) {
    const attendance = await this.prisma.attendance.findUnique({
      where: { id },
    });

    if (!attendance) {
      throw new NotFoundException('Attendance not found');
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
}
