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
            id: number;
            createdAt: Date;
            updatedAt: Date;
            day: import(".prisma/client").$Enums.DayOfWeek;
            groupId: number;
            startTime: Date;
            endTime: Date;
            roomNumber: string | null;
        };
    }>;
    findAll(): Promise<{
        success: boolean;
        count: number;
        schedules: ({
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
            id: number;
            createdAt: Date;
            updatedAt: Date;
            day: import(".prisma/client").$Enums.DayOfWeek;
            groupId: number;
            startTime: Date;
            endTime: Date;
            roomNumber: string | null;
        })[];
    }>;
    findOne(id: string): Promise<{
        success: boolean;
        schedule: {
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
            id: number;
            createdAt: Date;
            updatedAt: Date;
            day: import(".prisma/client").$Enums.DayOfWeek;
            groupId: number;
            startTime: Date;
            endTime: Date;
            roomNumber: string | null;
        };
    }>;
    update(id: string, updateScheduleDto: UpdateScheduleDto): Promise<{
        success: boolean;
        message: string;
        schedule: {
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
            id: number;
            createdAt: Date;
            updatedAt: Date;
            day: import(".prisma/client").$Enums.DayOfWeek;
            groupId: number;
            startTime: Date;
            endTime: Date;
            roomNumber: string | null;
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
