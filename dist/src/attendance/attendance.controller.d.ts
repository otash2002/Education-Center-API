import { AttendanceService } from './attendance.service';
import { CreateAttendanceDto } from './dto';
export declare class AttendanceController {
    private readonly attendanceService;
    constructor(attendanceService: AttendanceService);
    create(createAttendanceDto: CreateAttendanceDto, user: any): Promise<{
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
    findOne(id: string): Promise<{
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
    remove(id: string): Promise<{
        success: boolean;
        message: string;
        deletedAttendance: {
            id: number;
            lessonId: number;
        };
    }>;
}
