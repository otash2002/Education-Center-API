import { PrismaService } from '../prisma/prisma.service';
import { CreateAttendanceDto } from './dto';
export declare class AttendanceService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(createAttendanceDto: CreateAttendanceDto, staffId: number): Promise<{
        success: boolean;
        message: string;
        attendance: {
            details: ({
                student: {
                    username: string | null;
                    password: string | null;
                    firstName: string;
                    lastName: string;
                    phone: string | null;
                    address: string | null;
                    birthDate: Date | null;
                    id: number;
                    status: import(".prisma/client").$Enums.Status;
                    createdAt: Date;
                    updatedAt: Date;
                    enrollmentDate: Date;
                };
            } & {
                id: number;
                status: import(".prisma/client").$Enums.AttendanceStatus;
                studentId: number;
                comment: string | null;
                attendanceId: number;
            })[];
        } & {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            createdBy: number;
            lessonId: number;
        };
    }>;
    findAll(): Promise<{
        success: boolean;
        count: number;
        attendances: ({
            details: ({
                student: {
                    username: string | null;
                    password: string | null;
                    firstName: string;
                    lastName: string;
                    phone: string | null;
                    address: string | null;
                    birthDate: Date | null;
                    id: number;
                    status: import(".prisma/client").$Enums.Status;
                    createdAt: Date;
                    updatedAt: Date;
                    enrollmentDate: Date;
                };
            } & {
                id: number;
                status: import(".prisma/client").$Enums.AttendanceStatus;
                studentId: number;
                comment: string | null;
                attendanceId: number;
            })[];
        } & {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            createdBy: number;
            lessonId: number;
        })[];
    }>;
    findOne(id: number): Promise<{
        success: boolean;
        attendance: {
            details: ({
                student: {
                    username: string | null;
                    password: string | null;
                    firstName: string;
                    lastName: string;
                    phone: string | null;
                    address: string | null;
                    birthDate: Date | null;
                    id: number;
                    status: import(".prisma/client").$Enums.Status;
                    createdAt: Date;
                    updatedAt: Date;
                    enrollmentDate: Date;
                };
            } & {
                id: number;
                status: import(".prisma/client").$Enums.AttendanceStatus;
                studentId: number;
                comment: string | null;
                attendanceId: number;
            })[];
        } & {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            createdBy: number;
            lessonId: number;
        };
    }>;
    remove(id: number): Promise<{
        success: boolean;
        message: string;
        deletedAttendance: {
            id: number;
            lessonId: number;
        };
    }>;
}
