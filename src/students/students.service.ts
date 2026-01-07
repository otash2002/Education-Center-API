import { Injectable, BadRequestException, NotFoundException, ForbiddenException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { PrismaService } from '../prisma/prisma.service';
import { CreateStudentDto, UpdateStudentDto } from './dto';

@Injectable()
export class StudentsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createStudentDto: CreateStudentDto) {
    const { username, password, firstName, lastName, phone, address, birthDate } = createStudentDto;

    if (username) {
      const existingStudent = await this.prisma.student.findUnique({
        where: { username },
      });

      if (existingStudent) {
        throw new BadRequestException('Username already exists');
      }
    }

    const hashedPassword = password ? await bcrypt.hash(password, 10) : null;

    const student = await this.prisma.student.create({
      data: {
        firstName,
        lastName,
        username,
        password: hashedPassword,
        phone,
        address,
        birthDate: birthDate ? new Date(birthDate) : null,
      },
    });

    const { password: _, ...studentWithoutPassword } = student;
    return {
      success: true,
      message: 'Student created successfully',
      student: studentWithoutPassword,
    };
  }

  async findAll() {
    const students = await this.prisma.student.findMany({
      select: {
        id: true,
        firstName: true,
        lastName: true,
        username: true,
        phone: true,
        address: true,
        birthDate: true,
        status: true,
        enrollmentDate: true,
        createdAt: true,
        updatedAt: true,
      },
    });

    return {
      success: true,
      count: students.length,
      students,
    };
  }

  async findOne(id: number) {
    const student = await this.prisma.student.findUnique({
      where: { id },
      select: {
        id: true,
        firstName: true,
        lastName: true,
        username: true,
        phone: true,
        address: true,
        birthDate: true,
        status: true,
        enrollmentDate: true,
        createdAt: true,
        updatedAt: true,
      },
    });

    if (!student) {
      throw new NotFoundException('Student not found');
    }

    return {
      success: true,
      student,
    };
  }

  async remove(id: number) {
    const student = await this.prisma.student.findUnique({
      where: { id },
    });

    if (!student) {
      throw new NotFoundException('Student not found');
    }

    await this.prisma.student.delete({
      where: { id },
    });

    return {
      success: true,
      message: 'Student deleted successfully',
      deletedStudent: {
        id: student.id,
        firstName: student.firstName,
        lastName: student.lastName,
        username: student.username,
      },
    };
  }

  async update(id: number, updateStudentDto: UpdateStudentDto) {
    const student = await this.prisma.student.findUnique({
      where: { id },
    });

    if (!student) {
      throw new NotFoundException('Student not found');
    }

    const updateData: any = { ...updateStudentDto };
    if (updateStudentDto.birthDate) {
      updateData.birthDate = new Date(updateStudentDto.birthDate);
    }

    const updatedStudent = await this.prisma.student.update({
      where: { id },
      data: updateData,
      select: {
        id: true,
        firstName: true,
        lastName: true,
        username: true,
        phone: true,
        address: true,
        birthDate: true,
        status: true,
        enrollmentDate: true,
      },
    });

    return {
      success: true,
      message: 'Student updated successfully',
      student: updatedStudent,
    };
  }
}
