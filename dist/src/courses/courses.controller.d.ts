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
    findOne(id: string): Promise<{
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
    update(id: string, updateCourseDto: UpdateCourseDto): Promise<{
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
    remove(id: string): Promise<{
        success: boolean;
        message: string;
        deletedCourse: {
            id: number;
            name: string;
        };
    }>;
}
