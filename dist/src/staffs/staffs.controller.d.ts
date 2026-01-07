import { StaffsService } from './staffs.service';
import { CreateStaffDto } from './dto';
export declare class StaffsController {
    private readonly staffsService;
    constructor(staffsService: StaffsService);
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
    findOne(id: string): Promise<{
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
