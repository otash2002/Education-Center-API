export declare class StaffLoginResponseDto {
    success: boolean;
    token: string;
    staff: {
        id: string;
        firstName: string;
        lastName: string;
        username: string;
        role: string;
        position: string;
    };
}
