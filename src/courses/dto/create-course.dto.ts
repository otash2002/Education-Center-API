import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNumber, IsOptional, IsEnum } from 'class-validator';

export class CreateCourseDto {
  @ApiProperty({ 
    example: 'Frontend Development', 
    description: 'Kursning to‘liq nomi (masalan: Backend, Mobile)' 
  })
  @IsString()
  name: string;

  @ApiProperty({ 
    example: 'React va Next.js asosida zamonaviy interfeyslar yaratish', 
    description: 'Kurs haqida batafsil ma’lumot',
    required: false 
  })
  @IsOptional()
  @IsString()
  description?: string;

  @ApiProperty({ 
    example: 600000, 
    description: 'Kursning bir oylik to‘lov summasi (so‘mda)' 
  })
  @IsNumber()
  price: number;

  @ApiProperty({ 
    example: 4, 
    description: 'Kurs necha oy davom etishi' 
  })
  @IsNumber()
  duration: number;

  @ApiProperty({ 
    example: 'beginner', 
    enum: ['beginner', 'intermediate', 'advanced'],
    description: 'O‘quvchining bilim darajasi',
    required: false 
  })
  @IsOptional()
  @IsEnum(['beginner', 'intermediate', 'advanced'])
  level?: 'beginner' | 'intermediate' | 'advanced';
}