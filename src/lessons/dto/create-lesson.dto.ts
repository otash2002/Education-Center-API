import { IsString, IsNumber, IsDateString, IsOptional } from 'class-validator';

export class CreateLessonDto {
  @IsNumber()
  groupId: number;

  @IsOptional()
  @IsString()
  title?: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsDateString()
  lessonDate: string;

  @IsString()
  startTime: string;

  @IsString()
  endTime: string;

  @IsOptional()
  @IsString()
  roomNumber?: string;
}
