import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNumber, IsDateString, IsOptional, IsEnum } from 'class-validator';

export class UpdateGroupDto {
  @ApiProperty({ 
    example: 'NodeJS-001 (Kuzgi)', 
    description: 'Guruhning yangilangan nomi',
    required: false 
  })
  @IsOptional()
  @IsString()
  name?: string;

  @ApiProperty({ 
    example: 3, 
    description: 'Yangi tayinlangan o‘qituvchi ID raqami',
    required: false 
  })
  @IsOptional()
  @IsNumber()
  teacherId?: number;

  @ApiProperty({ 
    example: '2024-03-01', 
    description: 'O‘zgartirilgan boshlanish sanasi (YYYY-MM-DD)',
    required: false 
  })
  @IsOptional()
  @IsDateString()
  startDate?: string;

  @ApiProperty({ 
    example: '2024-09-01', 
    description: 'O‘zgartirilgan tugash sanasi (YYYY-MM-DD)',
    required: false 
  })
  @IsOptional()
  @IsDateString()
  endDate?: string;

  @ApiProperty({ 
    example: 'Ses-Pay-Shanba, 14:00-16:00', 
    description: 'Yangi dars jadvali',
    required: false 
  })
  @IsOptional()
  @IsString()
  schedule?: string;

  @ApiProperty({ 
    example: 25, 
    description: 'O‘quvchilar soni limitini o‘zgartirish',
    required: false 
  })
  @IsOptional()
  @IsNumber()
  maxStudents?: number;

  @ApiProperty({ 
    example: 'active', 
    enum: ['planned', 'active', 'completed'],
    description: 'Guruhning joriy holati (statusi)',
    required: false 
  })
  @IsOptional()
  @IsEnum(['planned', 'active', 'completed'])
  status?: 'planned' | 'active' | 'completed';
}