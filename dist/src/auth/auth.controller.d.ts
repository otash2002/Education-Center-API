import { AuthService } from './auth.service';
import { LoginDto, RegisterStaffDto, RegisterStudentDto } from './dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    staffLogin(loginDto: LoginDto): Promise<{
        success: boolean;
        token: string;
        staff: {
            id: number;
            firstName: string;
            lastName: string;
            username: string;
            role: import(".prisma/client").$Enums.Role;
            position: string;
        };
    }>;
    studentLogin(loginDto: LoginDto): Promise<{
        success: boolean;
        token: string;
        student: {
            id: number;
            firstName: string;
            lastName: string;
            username: string | null;
        };
    }>;
    registerStaff(registerDto: RegisterStaffDto): Promise<{
        success: boolean;
        message: string;
        token: string;
        staff: {
            id: number;
            firstName: string;
            lastName: string;
            username: string;
            role: import(".prisma/client").$Enums.Role;
            position: string;
        };
    }>;
    registerStudent(registerDto: RegisterStudentDto): Promise<{
        success: boolean;
        message: string;
        token: string;
        student: {
            id: number;
            firstName: string;
            lastName: string;
            username: string | null;
        };
    }>;
}
