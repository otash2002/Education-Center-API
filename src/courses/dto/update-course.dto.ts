import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNumber, IsOptional, IsBoolean, IsEnum } from 'class-validator';

export class UpdateCourseDto {
  @ApiProperty({ 
    example: 'Web Dasturlash (Update)', 
    description: 'Kursning yangi nomi',
    required: false 
  })
  @IsOptional()
  @IsString()
  name?: string;

  @ApiProperty({ 
    example: 'Yangi texnologiyalar qo‘shilgan kurs tavsifi', 
    description: 'Kurs haqida qo‘shimcha ma’lumot',
    required: false 
  })
  @IsOptional()
  @IsString()
  description?: string;

  @ApiProperty({ 
    example: 900000, 
    description: 'Yangi kurs narxi',
    required: false 
  })
  @IsOptional()
  @IsNumber()
  price?: number;

  @ApiProperty({ 
    example: 6, 
    description: 'Kurs davomiyligi (oyda)',
    required: false 
  })
  @IsOptional()
  @IsNumber()
  duration?: number;

  @ApiProperty({ 
    example: 'advanced', 
    enum: ['beginner', 'intermediate', 'advanced'],
    description: 'Kursning qiyinchilik darajasini o‘zgartirish',
    required: false 
  })
  @IsOptional()
  @IsEnum(['beginner', 'intermediate', 'advanced'])
  level?: 'beginner' | 'intermediate' | 'advanced';

  @ApiProperty({ 
    example: true, 
    description: 'Kurs faolligini boshqarish (active/inactive)',
    required: false 
  })
  @IsOptional()
  @IsBoolean()
  isActive?: boolean;
}