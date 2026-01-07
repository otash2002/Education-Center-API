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
            name: string;
            price: number;
            duration: number;
            level: import(".prisma/client").$Enums.CourseLevel | null;
            isActive: boolean;
            createdAt: Date;
            updatedAt: Date;
            id: number;
        };
    }>;
    findAll(): Promise<{
        success: boolean;
        count: number;
        courses: {
            description: string | null;
            name: string;
            price: number;
            duration: number;
            level: import(".prisma/client").$Enums.CourseLevel | null;
            isActive: boolean;
            createdAt: Date;
            updatedAt: Date;
            id: number;
        }[];
    }>;
    findOne(id: number): Promise<{
        success: boolean;
        course: {
            description: string | null;
            name: string;
            price: number;
            duration: number;
            level: import(".prisma/client").$Enums.CourseLevel | null;
            isActive: boolean;
            createdAt: Date;
            updatedAt: Date;
            id: number;
        };
    }>;
    update(id: number, updateCourseDto: UpdateCourseDto): Promise<{
        success: boolean;
        message: string;
        course: {
            description: string | null;
            name: string;
            price: number;
            duration: number;
            level: import(".prisma/client").$Enums.CourseLevel | null;
            isActive: boolean;
            createdAt: Date;
            updatedAt: Date;
            id: number;
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
