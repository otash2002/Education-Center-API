import { PrismaService } from '../prisma/prisma.service';
import { CreateStaffDto, UpdateStaffDto } from './dto';
export declare class StaffsService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(createStaffDto: CreateStaffDto): Promise<{
        success: boolean;
        message: string;
        staff: {
            firstName: string;
            lastName: string;
            position: string;
            phone: string | null;
            address: string | null;
            status: import(".prisma/client").$Enums.Status;
            username: string;
            role: import(".prisma/client").$Enums.Role;
            id: number;
            hireDate: Date;
            createdAt: Date;
            updatedAt: Date;
        };
    }>;
    findAll(): Promise<{
        success: boolean;
        count: number;
        staffs: {
            firstName: string;
            lastName: string;
            position: string;
            phone: string | null;
            address: string | null;
            status: import(".prisma/client").$Enums.Status;
            username: string;
            role: import(".prisma/client").$Enums.Role;
            id: number;
            hireDate: Date;
            createdAt: Date;
            updatedAt: Date;
        }[];
    }>;
    findOne(id: number): Promise<{
        success: boolean;
        staff: {
            firstName: string;
            lastName: string;
            position: string;
            phone: string | null;
            address: string | null;
            status: import(".prisma/client").$Enums.Status;
            username: string;
            role: import(".prisma/client").$Enums.Role;
            id: number;
            hireDate: Date;
            createdAt: Date;
            updatedAt: Date;
        };
    }>;
    remove(id: number): Promise<{
        success: boolean;
        message: string;
        deletedStaff: {
            id: number;
            firstName: string;
            lastName: string;
            username: string;
        };
    }>;
    update(id: number, updateStaffDto: UpdateStaffDto): Promise<{
        success: boolean;
        message: string;
        staff: {
            firstName: string;
            lastName: string;
            position: string;
            phone: string | null;
            address: string | null;
            status: import(".prisma/client").$Enums.Status;
            username: string;
            role: import(".prisma/client").$Enums.Role;
            id: number;
            hireDate: Date;
        };
    }>;
}
