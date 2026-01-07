import { PrismaService } from '../prisma/prisma.service';
import { CreateGroupDto, UpdateGroupDto } from './dto';
export declare class GroupsService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(createGroupDto: CreateGroupDto): Promise<{
        success: boolean;
        message: string;
        group: {
            course: {
                description: string | null;
                name: string;
                createdAt: Date;
                updatedAt: Date;
                id: number;
                price: number;
                duration: number;
                level: import(".prisma/client").$Enums.CourseLevel | null;
                isActive: boolean;
            };
            teacher: {
                status: import(".prisma/client").$Enums.Status;
                createdAt: Date;
                updatedAt: Date;
                id: number;
                firstName: string;
                lastName: string;
                username: string;
                password: string;
                role: import(".prisma/client").$Enums.Role;
                position: string;
                phone: string | null;
                address: string | null;
                hireDate: Date;
            };
        } & {
            name: string;
            teacherId: number;
            startDate: Date;
            endDate: Date | null;
            schedule: string | null;
            maxStudents: number;
            status: import(".prisma/client").$Enums.Status;
            createdAt: Date;
            updatedAt: Date;
            id: number;
            courseId: number;
        };
    }>;
    findAll(): Promise<{
        success: boolean;
        count: number;
        groups: ({
            course: {
                description: string | null;
                name: string;
                createdAt: Date;
                updatedAt: Date;
                id: number;
                price: number;
                duration: number;
                level: import(".prisma/client").$Enums.CourseLevel | null;
                isActive: boolean;
            };
            teacher: {
                status: import(".prisma/client").$Enums.Status;
                createdAt: Date;
                updatedAt: Date;
                id: number;
                firstName: string;
                lastName: string;
                username: string;
                password: string;
                role: import(".prisma/client").$Enums.Role;
                position: string;
                phone: string | null;
                address: string | null;
                hireDate: Date;
            };
        } & {
            name: string;
            teacherId: number;
            startDate: Date;
            endDate: Date | null;
            schedule: string | null;
            maxStudents: number;
            status: import(".prisma/client").$Enums.Status;
            createdAt: Date;
            updatedAt: Date;
            id: number;
            courseId: number;
        })[];
    }>;
    findOne(id: number): Promise<{
        success: boolean;
        group: {
            course: {
                description: string | null;
                name: string;
                createdAt: Date;
                updatedAt: Date;
                id: number;
                price: number;
                duration: number;
                level: import(".prisma/client").$Enums.CourseLevel | null;
                isActive: boolean;
            };
            teacher: {
                status: import(".prisma/client").$Enums.Status;
                createdAt: Date;
                updatedAt: Date;
                id: number;
                firstName: string;
                lastName: string;
                username: string;
                password: string;
                role: import(".prisma/client").$Enums.Role;
                position: string;
                phone: string | null;
                address: string | null;
                hireDate: Date;
            };
        } & {
            name: string;
            teacherId: number;
            startDate: Date;
            endDate: Date | null;
            schedule: string | null;
            maxStudents: number;
            status: import(".prisma/client").$Enums.Status;
            createdAt: Date;
            updatedAt: Date;
            id: number;
            courseId: number;
        };
    }>;
    update(id: number, updateGroupDto: UpdateGroupDto): Promise<{
        success: boolean;
        message: string;
        group: {
            course: {
                description: string | null;
                name: string;
                createdAt: Date;
                updatedAt: Date;
                id: number;
                price: number;
                duration: number;
                level: import(".prisma/client").$Enums.CourseLevel | null;
                isActive: boolean;
            };
            teacher: {
                status: import(".prisma/client").$Enums.Status;
                createdAt: Date;
                updatedAt: Date;
                id: number;
                firstName: string;
                lastName: string;
                username: string;
                password: string;
                role: import(".prisma/client").$Enums.Role;
                position: string;
                phone: string | null;
                address: string | null;
                hireDate: Date;
            };
        } & {
            name: string;
            teacherId: number;
            startDate: Date;
            endDate: Date | null;
            schedule: string | null;
            maxStudents: number;
            status: import(".prisma/client").$Enums.Status;
            createdAt: Date;
            updatedAt: Date;
            id: number;
            courseId: number;
        };
    }>;
    remove(id: number): Promise<{
        success: boolean;
        message: string;
        deletedGroup: {
            id: number;
            name: string;
        };
    }>;
}
