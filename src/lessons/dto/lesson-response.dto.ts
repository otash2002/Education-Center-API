export class LessonResponseDto {
  id: string;
  group: {
    id: string;
    name: string;
  };
  title?: string;
  description?: string;
  lessonDate: string;
  startTime: string;
  endTime: string;
  roomNumber?: string;
  createdAt?: string;
  updatedAt?: string;
}
