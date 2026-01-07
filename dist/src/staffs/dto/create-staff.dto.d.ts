export declare class CreateStaffDto {
    firstName: string;
    lastName: string;
    username: string;
    password: string;
    role: 'superadmin' | 'admin' | 'teacher';
    position: string;
    phone?: string;
    address?: string;
}
