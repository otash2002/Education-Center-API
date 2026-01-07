import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { PrismaService } from '../prisma/prisma.service';
import { LoginDto, RegisterStaffDto, RegisterStudentDto } from './dto';
export declare class AuthService {
    private readonly prisma;
    private readonly jwtService;
    private readonly configService;
    constructor(prisma: PrismaService, jwtService: JwtService, configService: ConfigService);
    staffLogin(loginDto: LoginDto): Promise<{
        success: boolean;
        token: string;
        staff: {
            id: number;
            firstName: string;
            lastName: string;
            username: string;
            role: import(".prisma/client").$Enums.Role;
            position: string;
        };
    }>;
    studentLogin(loginDto: LoginDto): Promise<{
        success: boolean;
        token: string;
        student: {
            id: number;
            firstName: string;
            lastName: string;
            username: string | null;
        };
    }>;
    registerStaff(registerDto: RegisterStaffDto): Promise<{
        success: boolean;
        message: string;
        token: string;
        staff: {
            id: number;
            firstName: string;
            lastName: string;
            username: string;
            role: import(".prisma/client").$Enums.Role;
            position: string;
        };
    }>;
    registerStudent(registerDto: RegisterStudentDto): Promise<{
        success: boolean;
        message: string;
        token: string;
        student: {
            id: number;
            firstName: string;
            lastName: string;
            username: string | null;
        };
    }>;
    hashPassword(password: string): Promise<string>;
}
