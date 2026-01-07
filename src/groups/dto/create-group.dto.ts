import { IsString, IsNumber, IsDateString, IsOptional } from 'class-validator';

export class CreateGroupDto {
  @IsString()
  name: string;

  @IsNumber()
  courseId: number;

  @IsNumber()
  teacherId: number;

  @IsDateString()
  startDate: string;

  @IsOptional()
  @IsDateString()
  endDate?: string;

  @IsOptional()
  @IsString()
  schedule?: string;

  @IsOptional()
  @IsNumber()
  maxStudents?: number;
}
