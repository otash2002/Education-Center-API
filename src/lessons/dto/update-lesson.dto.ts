import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsDateString, IsOptional } from 'class-validator';

export class UpdateLessonDto {
  @ApiProperty({ 
    example: 'NestJS-da DTO va Validation (Yangilangan)', 
    description: 'Dars mavzusini o‘zgartirish',
    required: false 
  })
  @IsOptional()
  @IsString()
  title?: string;

  @ApiProperty({ 
    example: 'Dars mavzusi kengaytirildi, yangi amaliy topshiriqlar qo‘shildi.', 
    description: 'Dars tavsifini yangilash',
    required: false 
  })
  @IsOptional()
  @IsString()
  description?: string;

  @ApiProperty({ 
    example: '2024-02-16', 
    description: 'Dars kunini boshqa sanaga ko‘chirish (YYYY-MM-DD)',
    required: false 
  })
  @IsOptional()
  @IsDateString()
  lessonDate?: string;

  @ApiProperty({ 
    example: '19:00', 
    description: 'Dars boshlanish vaqtini o‘zgartirish (HH:mm)',
    required: false 
  })
  @IsOptional()
  @IsString()
  startTime?: string;

  @ApiProperty({ 
    example: '21:00', 
    description: 'Dars tugash vaqtini o‘zgartirish (HH:mm)',
    required: false 
  })
  @IsOptional()
  @IsString()
  endTime?: string;

  @ApiProperty({ 
    example: 'Online (Zoom)', 
    description: 'Xona raqami yoki dars o‘tiladigan joyni o‘zgartirish',
    required: false 
  })
  @IsOptional()
  @IsString()
  roomNumber?: string;
}