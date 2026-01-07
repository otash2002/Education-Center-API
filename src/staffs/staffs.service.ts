import { Injectable, BadRequestException, NotFoundException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { PrismaService } from '../prisma/prisma.service';
import { CreateStaffDto, UpdateStaffDto } from './dto';

@Injectable()
export class StaffsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createStaffDto: CreateStaffDto) {
    const { username, password, firstName, lastName, role, position, phone, address } = createStaffDto;

    const existingStaff = await this.prisma.staff.findUnique({
      where: { username },
    });

    if (existingStaff) {
      throw new BadRequestException('Username already exists');
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const staff = await this.prisma.staff.create({
      data: {
        firstName,
        lastName,
        username,
        password: hashedPassword,
        role: role.toUpperCase() as any,
        position,
        phone,
        address,
      },
    });

    const { password: _, ...staffWithoutPassword } = staff;
    return {
      success: true,
      message: 'Staff created successfully',
      staff: staffWithoutPassword,
    };
  }

  async findAll() {
    const staffs = await this.prisma.staff.findMany({
      select: {
        id: true,
        firstName: true,
        lastName: true,
        username: true,
        role: true,
        position: true,
        phone: true,
        address: true,
        hireDate: true,
        status: true,
        createdAt: true,
        updatedAt: true,
      },
    });

    return {
      success: true,
      count: staffs.length,
      staffs,
    };
  }

  async findOne(id: number) {
    const staff = await this.prisma.staff.findUnique({
      where: { id },
      select: {
        id: true,
        firstName: true,
        lastName: true,
        username: true,
        role: true,
        position: true,
        phone: true,
        address: true,
        hireDate: true,
        status: true,
        createdAt: true,
        updatedAt: true,
      },
    });

    if (!staff) {
      throw new NotFoundException('Staff not found');
    }

    return {
      success: true,
      staff,
    };
  }

  async remove(id: number) {
    const staff = await this.prisma.staff.findUnique({
      where: { id },
    });

    if (!staff) {
      throw new NotFoundException('Staff not found');
    }

    await this.prisma.staff.delete({
      where: { id },
    });

    return {
      success: true,
      message: 'Staff deleted successfully',
      deletedStaff: {
        id: staff.id,
        firstName: staff.firstName,
        lastName: staff.lastName,
        username: staff.username,
      },
    };
  }

  async update(id: number, updateStaffDto: UpdateStaffDto) {
    const staff = await this.prisma.staff.findUnique({
      where: { id },
    });

    if (!staff) {
      throw new NotFoundException('Staff not found');
    }

    const updateData: any = { ...updateStaffDto };
    if (updateStaffDto.password) {
      updateData.password = await bcrypt.hash(updateStaffDto.password, 10);
    }

    const updatedStaff = await this.prisma.staff.update({
      where: { id },
      data: updateData,
      select: {
        id: true,
        firstName: true,
        lastName: true,
        username: true,
        role: true,
        position: true,
        phone: true,
        address: true,
        hireDate: true,
        status: true,
      },
    });

    return {
      success: true,
      message: 'Staff updated successfully',
      staff: updatedStaff,
    };
  }
}
