import { GroupsService } from './groups.service';
import { CreateGroupDto, UpdateGroupDto } from './dto';
export declare class GroupsController {
    private readonly groupsService;
    constructor(groupsService: GroupsService);
    create(createGroupDto: CreateGroupDto): Promise<{
        success: boolean;
        message: string;
        group: {
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
            teacher: {
                username: string;
                password: string;
                firstName: string;
                lastName: string;
                role: import(".prisma/client").$Enums.Role;
                position: string;
                phone: string | null;
                address: string | null;
                id: number;
                hireDate: Date;
                status: import(".prisma/client").$Enums.Status;
                createdAt: Date;
                updatedAt: Date;
            };
        } & {
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
    }>;
    findAll(): Promise<{
        success: boolean;
        count: number;
        groups: ({
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
            teacher: {
                username: string;
                password: string;
                firstName: string;
                lastName: string;
                role: import(".prisma/client").$Enums.Role;
                position: string;
                phone: string | null;
                address: string | null;
                id: number;
                hireDate: Date;
                status: import(".prisma/client").$Enums.Status;
                createdAt: Date;
                updatedAt: Date;
            };
        } & {
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
        })[];
    }>;
    findOne(id: string): Promise<{
        success: boolean;
        group: {
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
            teacher: {
                username: string;
                password: string;
                firstName: string;
                lastName: string;
                role: import(".prisma/client").$Enums.Role;
                position: string;
                phone: string | null;
                address: string | null;
                id: number;
                hireDate: Date;
                status: import(".prisma/client").$Enums.Status;
                createdAt: Date;
                updatedAt: Date;
            };
        } & {
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
    }>;
    update(id: string, updateGroupDto: UpdateGroupDto): Promise<{
        success: boolean;
        message: string;
        group: {
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
            teacher: {
                username: string;
                password: string;
                firstName: string;
                lastName: string;
                role: import(".prisma/client").$Enums.Role;
                position: string;
                phone: string | null;
                address: string | null;
                id: number;
                hireDate: Date;
                status: import(".prisma/client").$Enums.Status;
                createdAt: Date;
                updatedAt: Date;
            };
        } & {
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
    }>;
    remove(id: string): Promise<{
        success: boolean;
        message: string;
        deletedGroup: {
            id: number;
            name: string;
        };
    }>;
}
