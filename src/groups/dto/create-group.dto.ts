import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNumber, IsDateString, IsOptional, Min } from 'class-validator';

export class CreateGroupDto {
  @ApiProperty({ 
    example: 'NodeJS-001', 
    description: 'Guruhning nomi yoki kodi' 
  })
  @IsString()
  name: string;

  @ApiProperty({ 
    example: 1, 
    description: 'Bog‘lanishi kerak bo‘lgan Kurs ID raqami' 
  })
  @IsNumber()
  courseId: number;

  @ApiProperty({ 
    example: 5, 
    description: 'Dars beradigan O‘qituvchi (Staff) ID raqami' 
  })
  @IsNumber()
  teacherId: number;

  @ApiProperty({ 
    example: '2024-02-01', 
    description: 'Guruh darslari boshlanish sanasi (YYYY-MM-DD)' 
  })
  @IsDateString()
  startDate: string;

  @ApiProperty({ 
    example: '2024-08-01', 
    description: 'Guruh darslari tugash sanasi (ixtiyoriy)',
    required: false 
  })
  @IsOptional()
  @IsDateString()
  endDate?: string;

  @ApiProperty({ 
    example: 'Dush-Sesh-Juma, 18:00-20:00', 
    description: 'Dars jadvali haqida ma’lumot',
    required: false 
  })
  @IsOptional()
  @IsString()
  schedule?: string;

  @ApiProperty({ 
    example: 20, 
    description: 'Guruhdagi maksimal o‘quvchilar soni',
    required: false 
  })
  @IsOptional()
  @IsNumber()
  @Min(1)
  maxStudents?: number;
}