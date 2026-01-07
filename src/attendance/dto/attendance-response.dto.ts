export class AttendanceDetailResponseDto {
  student: {
    id: string;
    firstName: string;
    lastName: string;
  };
  status: string;
  comment?: string;
}

export class AttendanceResponseDto {
  id: string;
  lesson: {
    id: string;
    title: string;
    lessonDate: string;
    group: {
      id: string;
      name: string;
    };
  };
  attendance: {
    total: number;
    present: number;
    absent: number;
    late: number;
    students: AttendanceDetailResponseDto[];
  };
}
