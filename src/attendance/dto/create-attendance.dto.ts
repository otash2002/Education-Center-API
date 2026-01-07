import { IsNumber, IsString, IsOptional, IsArray } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class AttendanceDetailDto {
  @ApiProperty({ example: 1, description: 'O\'quvchi ID' })
  @IsNumber()
  studentId: number;

  @ApiProperty({ example: 'present', enum: ['present', 'absent', 'late'] })
  @IsString()
  status: 'present' | 'absent' | 'late';

  @ApiProperty({ example: 'Vaqtida', required: false })
  @IsOptional()
  @IsString()
  comment?: string;
}

export class CreateAttendanceDto {
  @ApiProperty({ example: 1, description: 'Dars ID' })
  @IsNumber()
  lessonId: number;

  @ApiProperty({
    type: () => [AttendanceDetailDto],
    description: 'Davomatlar ro\'yxati',
  })
  @IsArray()
  attendances: AttendanceDetailDto[];
}
