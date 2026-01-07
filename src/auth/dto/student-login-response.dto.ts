export class StudentLoginResponseDto {
  success: boolean;
  token: string;
  student: {
    id: string;
    firstName: string;
    lastName: string;
    username: string;
  };
}
