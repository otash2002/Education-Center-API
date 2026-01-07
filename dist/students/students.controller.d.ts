import { StudentsService } from './students.service';
import { CreateStudentDto } from './dto';
export declare class StudentsController {
    private readonly studentsService;
    constructor(studentsService: StudentsService);
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
    findOne(id: string, user: any): Promise<{
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
