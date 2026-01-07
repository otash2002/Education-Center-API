import { LessonsService } from './lessons.service';
import { CreateLessonDto, UpdateLessonDto } from './dto';
export declare class LessonsController {
    private readonly lessonsService;
    constructor(lessonsService: LessonsService);
    create(createLessonDto: CreateLessonDto, user: any): Promise<{
        success: boolean;
        message: string;
        lesson: {
            group: {
                createdAt: Date;
                updatedAt: Date;
                id: number;
                name: string;
                courseId: number;
                teacherId: number;
                startDate: Date;
                endDate: Date | null;
                schedule: string | null;
                maxStudents: number;
                status: import(".prisma/client").$Enums.Status;
            };
        } & {
            description: string | null;
            title: string | null;
            lessonDate: Date;
            startTime: Date;
            endTime: Date;
            roomNumber: string | null;
            createdAt: Date;
            updatedAt: Date;
            id: number;
            groupId: number;
            createdBy: number;
        };
    }>;
    findAll(): Promise<{
        success: boolean;
        count: number;
        lessons: ({
            group: {
                createdAt: Date;
                updatedAt: Date;
                id: number;
                name: string;
                courseId: number;
                teacherId: number;
                startDate: Date;
                endDate: Date | null;
                schedule: string | null;
                maxStudents: number;
                status: import(".prisma/client").$Enums.Status;
            };
        } & {
            description: string | null;
            title: string | null;
            lessonDate: Date;
            startTime: Date;
            endTime: Date;
            roomNumber: string | null;
            createdAt: Date;
            updatedAt: Date;
            id: number;
            groupId: number;
            createdBy: number;
        })[];
    }>;
    findOne(id: string): Promise<{
        success: boolean;
        lesson: {
            group: {
                createdAt: Date;
                updatedAt: Date;
                id: number;
                name: string;
                courseId: number;
                teacherId: number;
                startDate: Date;
                endDate: Date | null;
                schedule: string | null;
                maxStudents: number;
                status: import(".prisma/client").$Enums.Status;
            };
        } & {
            description: string | null;
            title: string | null;
            lessonDate: Date;
            startTime: Date;
            endTime: Date;
            roomNumber: string | null;
            createdAt: Date;
            updatedAt: Date;
            id: number;
            groupId: number;
            createdBy: number;
        };
    }>;
    update(id: string, updateLessonDto: UpdateLessonDto): Promise<{
        success: boolean;
        message: string;
        lesson: {
            group: {
                createdAt: Date;
                updatedAt: Date;
                id: number;
                name: string;
                courseId: number;
                teacherId: number;
                startDate: Date;
                endDate: Date | null;
                schedule: string | null;
                maxStudents: number;
                status: import(".prisma/client").$Enums.Status;
            };
        } & {
            description: string | null;
            title: string | null;
            lessonDate: Date;
            startTime: Date;
            endTime: Date;
            roomNumber: string | null;
            createdAt: Date;
            updatedAt: Date;
            id: number;
            groupId: number;
            createdBy: number;
        };
    }>;
    remove(id: string): Promise<{
        success: boolean;
        message: string;
        deletedLesson: {
            id: number;
            title: string | null;
        };
    }>;
}
