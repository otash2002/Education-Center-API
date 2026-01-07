import { PrismaService } from '../prisma/prisma.service';
import { CreateLessonDto, UpdateLessonDto } from './dto';
export declare class LessonsService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(createLessonDto: CreateLessonDto, staffId: number): Promise<{
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
    findOne(id: number): Promise<{
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
    update(id: number, updateLessonDto: UpdateLessonDto): Promise<{
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
    remove(id: number): Promise<{
        success: boolean;
        message: string;
        deletedLesson: {
            id: number;
            title: string | null;
        };
    }>;
}
