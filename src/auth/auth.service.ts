import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import * as bcrypt from 'bcrypt';
import { PrismaService } from '../prisma/prisma.service';
import { LoginDto, RegisterStaffDto, RegisterStudentDto } from './dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
  ) {}

  async staffLogin(loginDto: LoginDto) {
    const { username, password } = loginDto;

    const staff = await this.prisma.staff.findUnique({
      where: { username },
    });

    if (!staff) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const isPasswordValid = await bcrypt.compare(password, staff.password);

    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const payload = {
      sub: staff.id,
      username: staff.username,
      role: staff.role,
      type: 'staff',
    };

    const token = this.jwtService.sign(payload);

    return {
      success: true,
      token,
      staff: {
        id: staff.id,
        firstName: staff.firstName,
        lastName: staff.lastName,
        username: staff.username,
        role: staff.role,
        position: staff.position,
      },
    };
  }

  async studentLogin(loginDto: LoginDto) {
    const { username, password } = loginDto;

    const student = await this.prisma.student.findUnique({
      where: { username },
    });

    if (!student || !student.password) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const isPasswordValid = await bcrypt.compare(password, student.password);

    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const payload = {
      sub: student.id,
      username: student.username,
      role: 'STUDENT',
      type: 'student',
    };

    const token = this.jwtService.sign(payload);

    return {
      success: true,
      token,
      student: {
        id: student.id,
        firstName: student.firstName,
        lastName: student.lastName,
        username: student.username,
      },
    };
  }

  async registerStaff(registerDto: RegisterStaffDto) {
    const { username, password, confirmPassword, firstName, lastName, role, position, phone, address } = registerDto;

    if (password !== confirmPassword) {
      throw new BadRequestException('Passwords do not match');
    }

    const existingStaff = await this.prisma.staff.findUnique({
      where: { username },
    });

    if (existingStaff) {
      throw new BadRequestException('Username already exists');
    }

    const hashedPassword = await this.hashPassword(password);

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

    const payload = {
      sub: staff.id,
      username: staff.username,
      role: staff.role,
      type: 'staff',
    };

    const token = this.jwtService.sign(payload);

    return {
      success: true,
      message: 'Staff registered successfully',
      token,
      staff: {
        id: staff.id,
        firstName: staff.firstName,
        lastName: staff.lastName,
        username: staff.username,
        role: staff.role,
        position: staff.position,
      },
    };
  }

  async registerStudent(registerDto: RegisterStudentDto) {
    const { username, password, confirmPassword, firstName, lastName, phone, address, birthDate } = registerDto;

    if (password !== confirmPassword) {
      throw new BadRequestException('Passwords do not match');
    }

    const existingStudent = await this.prisma.student.findUnique({
      where: { username },
    });

    if (existingStudent) {
      throw new BadRequestException('Username already exists');
    }

    const hashedPassword = await this.hashPassword(password);

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

    const payload = {
      sub: student.id,
      username: student.username,
      role: 'STUDENT',
      type: 'student',
    };

    const token = this.jwtService.sign(payload);

    return {
      success: true,
      message: 'Student registered successfully',
      token,
      student: {
        id: student.id,
        firstName: student.firstName,
        lastName: student.lastName,
        username: student.username,
      },
    };
  }

  async hashPassword(password: string): Promise<string> {
    const salt = await bcrypt.genSalt(10);
    return bcrypt.hash(password, salt);
  }
}
