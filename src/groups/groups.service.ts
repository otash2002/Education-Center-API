import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateGroupDto, UpdateGroupDto } from './dto';

@Injectable()
export class GroupsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createGroupDto: CreateGroupDto) {
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

  async findOne(id: number) {
    const group = await this.prisma.group.findUnique({
      where: { id },
      include: { course: true, teacher: true },
    });

    if (!group) {
      throw new NotFoundException('Group not found');
    }

    return {
      success: true,
      group,
    };
  }

  async update(id: number, updateGroupDto: UpdateGroupDto) {
    const group = await this.prisma.group.findUnique({
      where: { id },
    });

    if (!group) {
      throw new NotFoundException('Group not found');
    }

    const updateData: any = { ...updateGroupDto };
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

  async remove(id: number) {
    const group = await this.prisma.group.findUnique({
      where: { id },
    });

    if (!group) {
      throw new NotFoundException('Group not found');
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
}
