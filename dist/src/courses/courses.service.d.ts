import { PrismaService } from '../prisma/prisma.service';
import { CreateCourseDto, UpdateCourseDto } from './dto';
export declare class CoursesService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(createCourseDto: CreateCourseDto): Promise<{
        success: boolean;
        message: string;
        course: {
            description: string | null;
            id: number;
            createdAt: Date;
            updatedAt: Date;
            name: string;
            price: number;
            duration: number;
            level: import(".prisma/client").$Enums.CourseLevel | null;
            isActive: boolean;
        };
    }>;
    findAll(): Promise<{
        success: boolean;
        count: number;
        courses: {
            description: string | null;
            id: number;
            createdAt: Date;
            updatedAt: Date;
            name: string;
            price: number;
            duration: number;
            level: import(".prisma/client").$Enums.CourseLevel | null;
            isActive: boolean;
        }[];
    }>;
    findOne(id: number): Promise<{
        success: boolean;
        course: {
            description: string | null;
            id: number;
            createdAt: Date;
            updatedAt: Date;
            name: string;
            price: number;
            duration: number;
            level: import(".prisma/client").$Enums.CourseLevel | null;
            isActive: boolean;
        };
    }>;
    update(id: number, updateCourseDto: UpdateCourseDto): Promise<{
        success: boolean;
        message: string;
        course: {
            description: string | null;
            id: number;
            createdAt: Date;
            updatedAt: Date;
            name: string;
            price: number;
            duration: number;
            level: import(".prisma/client").$Enums.CourseLevel | null;
            isActive: boolean;
        };
    }>;
    remove(id: number): Promise<{
        success: boolean;
        message: string;
        deletedCourse: {
            id: number;
            name: string;
        };
    }>;
}
