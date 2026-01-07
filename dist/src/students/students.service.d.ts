import { PrismaService } from '../prisma/prisma.service';
import { CreateStudentDto, UpdateStudentDto } from './dto';
export declare class StudentsService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(createStudentDto: CreateStudentDto): Promise<{
        success: boolean;
        message: string;
        student: {
            firstName: string;
            lastName: string;
            phone: string | null;
            address: string | null;
            birthDate: Date | null;
            status: import(".prisma/client").$Enums.Status;
            username: string | null;
            id: number;
            enrollmentDate: Date;
            createdAt: Date;
            updatedAt: Date;
        };
    }>;
    findAll(): Promise<{
        success: boolean;
        count: number;
        students: {
            firstName: string;
            lastName: string;
            phone: string | null;
            address: string | null;
            birthDate: Date | null;
            status: import(".prisma/client").$Enums.Status;
            username: string | null;
            id: number;
            enrollmentDate: Date;
            createdAt: Date;
            updatedAt: Date;
        }[];
    }>;
    findOne(id: number): Promise<{
        success: boolean;
        student: {
            firstName: string;
            lastName: string;
            phone: string | null;
            address: string | null;
            birthDate: Date | null;
            status: import(".prisma/client").$Enums.Status;
            username: string | null;
            id: number;
            enrollmentDate: Date;
            createdAt: Date;
            updatedAt: Date;
        };
    }>;
    remove(id: number): Promise<{
        success: boolean;
        message: string;
        deletedStudent: {
            id: number;
            firstName: string;
            lastName: string;
            username: string | null;
        };
    }>;
    update(id: number, updateStudentDto: UpdateStudentDto): Promise<{
        success: boolean;
        message: string;
        student: {
            firstName: string;
            lastName: string;
            phone: string | null;
            address: string | null;
            birthDate: Date | null;
            status: import(".prisma/client").$Enums.Status;
            username: string | null;
            id: number;
            enrollmentDate: Date;
        };
    }>;
}
