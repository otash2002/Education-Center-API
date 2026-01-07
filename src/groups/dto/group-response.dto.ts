export class GroupResponseDto {
  id: string;
  name: string;
  course: {
    id: string;
    name: string;
  };
  teacher: {
    id: string;
    staff: {
      firstName: string;
      lastName: string;
    };
  };
  startDate: string;
  endDate?: string;
  schedule?: string;
  maxStudents?: number;
  status?: string;
  createdAt?: string;
  updatedAt?: string;
}
