import { CoursesService } from './courses.service';
import { CreateCourseDto, UpdateCourseDto } from './dto';
export declare class CoursesController {
    private readonly coursesService;
    constructor(coursesService: CoursesService);
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
    findOne(id: string): Promise<{
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
    update(id: string, updateCourseDto: UpdateCourseDto): Promise<{
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
    remove(id: string): Promise<{
        success: boolean;
        message: string;
        deletedCourse: {
            id: number;
            name: string;
        };
    }>;
}
