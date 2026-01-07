import { StudentsService } from './students.service';
import { CreateStudentDto } from './dto';
export declare class StudentsController {
    private readonly studentsService;
    constructor(studentsService: StudentsService);
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
    findOne(id: string, user: any): Promise<{
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
    remove(id: string): Promise<{
        success: boolean;
        message: string;
        deletedStudent: {
            id: number;
            firstName: string;
            lastName: string;
            username: string | null;
        };
    }>;
}
