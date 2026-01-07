export declare class UpdateGroupDto {
    name?: string;
    teacherId?: number;
    startDate?: string;
    endDate?: string;
    schedule?: string;
    maxStudents?: number;
    status?: 'planned' | 'active' | 'completed';
}
