import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateScheduleDto, UpdateScheduleDto } from './dto';

@Injectable()
export class ScheduleService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createScheduleDto: CreateScheduleDto) {
    const schedule = await this.prisma.schedule.create({
      data: {
        groupId: createScheduleDto.groupId,
        day: createScheduleDto.day.toUpperCase() as any,
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

  async findOne(id: number) {
    const schedule = await this.prisma.schedule.findUnique({
      where: { id },
      include: { group: true },
    });

    if (!schedule) {
      throw new NotFoundException('Schedule not found');
    }

    return {
      success: true,
      schedule,
    };
  }

  async update(id: number, updateScheduleDto: UpdateScheduleDto) {
    const schedule = await this.prisma.schedule.findUnique({
      where: { id },
    });

    if (!schedule) {
      throw new NotFoundException('Schedule not found');
    }

    const updateData: any = { ...updateScheduleDto };
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

  async remove(id: number) {
    const schedule = await this.prisma.schedule.findUnique({
      where: { id },
    });

    if (!schedule) {
      throw new NotFoundException('Schedule not found');
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
}
