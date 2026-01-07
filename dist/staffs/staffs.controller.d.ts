import { StaffsService } from './staffs.service';
import { CreateStaffDto } from './dto';
export declare class StaffsController {
    private readonly staffsService;
    constructor(staffsService: StaffsService);
    create(createStaffDto: CreateStaffDto): Promise<{
        success: boolean;
        message: string;
        staff: {
            username: string;
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
    }>;
    findAll(): Promise<{
        success: boolean;
        count: number;
        staffs: {
            username: string;
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
        }[];
    }>;
    findOne(id: string): Promise<{
        success: boolean;
        staff: {
            username: string;
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
    }>;
    remove(id: string): Promise<{
        success: boolean;
        message: string;
        deletedStaff: {
            id: number;
            firstName: string;
            lastName: string;
            username: string;
        };
    }>;
}
