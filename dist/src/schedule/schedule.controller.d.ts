import { ScheduleService } from './schedule.service';
import { CreateScheduleDto, UpdateScheduleDto } from './dto';
export declare class ScheduleController {
    private readonly scheduleService;
    constructor(scheduleService: ScheduleService);
    create(createScheduleDto: CreateScheduleDto): Promise<{
        success: boolean;
        message: string;
        schedule: {
            group: {
                createdAt: Date;
                updatedAt: Date;
                id: number;
                name: string;
                schedule: string | null;
                courseId: number;
                teacherId: number;
                startDate: Date;
                endDate: Date | null;
                maxStudents: number;
                status: import(".prisma/client").$Enums.Status;
            };
        } & {
            day: import(".prisma/client").$Enums.DayOfWeek;
            startTime: Date;
            endTime: Date;
            roomNumber: string | null;
            createdAt: Date;
            updatedAt: Date;
            id: number;
            groupId: number;
        };
    }>;
    findAll(): Promise<{
        success: boolean;
        count: number;
        schedules: ({
            group: {
                createdAt: Date;
                updatedAt: Date;
                id: number;
                name: string;
                schedule: string | null;
                courseId: number;
                teacherId: number;
                startDate: Date;
                endDate: Date | null;
                maxStudents: number;
                status: import(".prisma/client").$Enums.Status;
            };
        } & {
            day: import(".prisma/client").$Enums.DayOfWeek;
            startTime: Date;
            endTime: Date;
            roomNumber: string | null;
            createdAt: Date;
            updatedAt: Date;
            id: number;
            groupId: number;
        })[];
    }>;
    findOne(id: string): Promise<{
        success: boolean;
        schedule: {
            group: {
                createdAt: Date;
                updatedAt: Date;
                id: number;
                name: string;
                schedule: string | null;
                courseId: number;
                teacherId: number;
                startDate: Date;
                endDate: Date | null;
                maxStudents: number;
                status: import(".prisma/client").$Enums.Status;
            };
        } & {
            day: import(".prisma/client").$Enums.DayOfWeek;
            startTime: Date;
            endTime: Date;
            roomNumber: string | null;
            createdAt: Date;
            updatedAt: Date;
            id: number;
            groupId: number;
        };
    }>;
    update(id: string, updateScheduleDto: UpdateScheduleDto): Promise<{
        success: boolean;
        message: string;
        schedule: {
            group: {
                createdAt: Date;
                updatedAt: Date;
                id: number;
                name: string;
                schedule: string | null;
                courseId: number;
                teacherId: number;
                startDate: Date;
                endDate: Date | null;
                maxStudents: number;
                status: import(".prisma/client").$Enums.Status;
            };
        } & {
            day: import(".prisma/client").$Enums.DayOfWeek;
            startTime: Date;
            endTime: Date;
            roomNumber: string | null;
            createdAt: Date;
            updatedAt: Date;
            id: number;
            groupId: number;
        };
    }>;
    remove(id: string): Promise<{
        success: boolean;
        message: string;
        deletedSchedule: {
            id: number;
            day: import(".prisma/client").$Enums.DayOfWeek;
        };
    }>;
}
