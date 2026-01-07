export declare class AttendanceDetailDto {
    studentId: number;
    status: 'present' | 'absent' | 'late';
    comment?: string;
}
export declare class CreateAttendanceDto {
    lessonId: number;
    attendances: AttendanceDetailDto[];
}
