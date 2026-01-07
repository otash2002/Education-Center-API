export declare class RegisterStaffDto {
    firstName: string;
    lastName: string;
    username: string;
    password: string;
    confirmPassword: string;
    role: 'superadmin' | 'admin' | 'teacher';
    position: string;
    phone?: string;
    address?: string;
}
