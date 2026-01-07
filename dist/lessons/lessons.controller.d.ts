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
                schedule: string | null;
                id: number;
                status: import(".prisma/client").$Enums.Status;
                createdAt: Date;
                updatedAt: Date;
                name: string;
                courseId: number;
                teacherId: number;
                startDate: Date;
                endDate: Date | null;
                maxStudents: number;
            };
        } & {
            description: string | null;
            title: string | null;
            id: number;
            createdAt: Date;
            updatedAt: Date;
            groupId: number;
            lessonDate: Date;
            startTime: Date;
            endTime: Date;
            roomNumber: string | null;
            createdBy: number;
        };
    }>;
    findAll(): Promise<{
        success: boolean;
        count: number;
        lessons: ({
            group: {
                schedule: string | null;
                id: number;
                status: import(".prisma/client").$Enums.Status;
                createdAt: Date;
                updatedAt: Date;
                name: string;
                courseId: number;
                teacherId: number;
                startDate: Date;
                endDate: Date | null;
                maxStudents: number;
            };
        } & {
            description: string | null;
            title: string | null;
            id: number;
            createdAt: Date;
            updatedAt: Date;
            groupId: number;
            lessonDate: Date;
            startTime: Date;
            endTime: Date;
            roomNumber: string | null;
            createdBy: number;
        })[];
    }>;
    findOne(id: string): Promise<{
        success: boolean;
        lesson: {
            group: {
                schedule: string | null;
                id: number;
                status: import(".prisma/client").$Enums.Status;
                createdAt: Date;
                updatedAt: Date;
                name: string;
                courseId: number;
                teacherId: number;
                startDate: Date;
                endDate: Date | null;
                maxStudents: number;
            };
        } & {
            description: string | null;
            title: string | null;
            id: number;
            createdAt: Date;
            updatedAt: Date;
            groupId: number;
            lessonDate: Date;
            startTime: Date;
            endTime: Date;
            roomNumber: string | null;
            createdBy: number;
        };
    }>;
    update(id: string, updateLessonDto: UpdateLessonDto): Promise<{
        success: boolean;
        message: string;
        lesson: {
            group: {
                schedule: string | null;
                id: number;
                status: import(".prisma/client").$Enums.Status;
                createdAt: Date;
                updatedAt: Date;
                name: string;
                courseId: number;
                teacherId: number;
                startDate: Date;
                endDate: Date | null;
                maxStudents: number;
            };
        } & {
            description: string | null;
            title: string | null;
            id: number;
            createdAt: Date;
            updatedAt: Date;
            groupId: number;
            lessonDate: Date;
            startTime: Date;
            endTime: Date;
            roomNumber: string | null;
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
