import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNumber, IsDateString, IsOptional } from 'class-validator';

export class CreateLessonDto {
  @ApiProperty({ 
    example: 1, 
    description: 'Dars o‘tiladigan guruhning ID raqami' 
  })
  @IsNumber()
  groupId: number;

  @ApiProperty({ 
    example: 'NestJS-da DTO va Validation', 
    description: 'Dars mavzusi',
    required: false 
  })
  @IsOptional()
  @IsString()
  title?: string;

  @ApiProperty({ 
    example: 'Bugungi darsda Swagger va class-validator ishlatishni o‘rganamiz', 
    description: 'Dars haqida qo‘shimcha ma’lumotlar',
    required: false 
  })
  @IsOptional()
  @IsString()
  description?: string;

  @ApiProperty({ 
    example: '2024-02-15', 
    description: 'Dars bo‘lib o‘tadigan sana (YYYY-MM-DD)' 
  })
  @IsDateString()
  lessonDate: string;

  @ApiProperty({ 
    example: '18:00', 
    description: 'Dars boshlanish vaqti (HH:mm formatida)' 
  })
  @IsString()
  startTime: string;

  @ApiProperty({ 
    example: '20:00', 
    description: 'Dars tugash vaqti (HH:mm formatida)' 
  })
  @IsString()
  endTime: string;

  @ApiProperty({ 
    example: 'Room 302', 
    description: 'Xona raqami yoki nomi',
    required: false 
  })
  @IsOptional()
  @IsString()
  roomNumber?: string;
}