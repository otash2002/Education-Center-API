import { PrismaService } from '../prisma/prisma.service';
import { CreateStudentDto, UpdateStudentDto } from './dto';
export declare class StudentsService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(createStudentDto: CreateStudentDto): Promise<{
        success: boolean;
        message: string;
        student: {
            username: string | null;
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
    }>;
    findAll(): Promise<{
        success: boolean;
        count: number;
        students: {
            username: string | null;
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
        }[];
    }>;
    findOne(id: number): Promise<{
        success: boolean;
        student: {
            username: string | null;
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
            username: string | null;
            firstName: string;
            lastName: string;
            phone: string | null;
            address: string | null;
            birthDate: Date | null;
            id: number;
            status: import(".prisma/client").$Enums.Status;
            enrollmentDate: Date;
        };
    }>;
}
