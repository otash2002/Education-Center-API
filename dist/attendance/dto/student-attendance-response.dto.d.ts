export declare class StudentAttendanceDetailDto {
    lesson: {
        id: string;
        title: string;
        lessonDate: string;
        group: {
            id: string;
            name: string;
        };
    };
    status: string;
    comment?: string;
}
export declare class StudentAttendanceResponseDto {
    student: {
        id: string;
        firstName: string;
        lastName: string;
    };
    attendance: {
        totalLessons: number;
        present: number;
        absent: number;
        late: number;
        presentPercentage: number;
        lessons: StudentAttendanceDetailDto[];
    };
}
