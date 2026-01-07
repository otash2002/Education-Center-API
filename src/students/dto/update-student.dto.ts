import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsOptional, IsDateString, IsPhoneNumber, IsEnum } from 'class-validator';

export class UpdateStudentDto {
  @ApiProperty({ 
    example: 'Asadbek', 
    description: 'Talabaning ismini yangilash', 
    required: false 
  })
  @IsOptional()
  @IsString()
  firstName?: string;

  @ApiProperty({ 
    example: 'Olimov', 
    description: 'Talabaning familiyasini yangilash', 
    required: false 
  })
  @IsOptional()
  @IsString()
  lastName?: string;

  @ApiProperty({ 
    example: '+998911234567', 
    description: 'Yangi telefon raqami', 
    required: false 
  })
  @IsOptional()
  @IsPhoneNumber('UZ')
  phone?: string;

  @ApiProperty({ 
    example: 'Toshkent sh., Yunusobod tumani', 
    description: 'Yangi yashash manzili', 
    required: false 
  })
  @IsOptional()
  @IsString()
  address?: string;

  @ApiProperty({ 
    example: '2008-05-20', 
    description: 'Tug‘ilgan sanani tuzatish (YYYY-MM-DD)', 
    required: false 
  })
  @IsOptional()
  @IsDateString()
  birthDate?: string;

  @ApiProperty({ 
    example: 'active', 
    enum: ['active', 'inactive', 'graduated'],
    description: 'Talabaning joriy holati', 
    required: false 
  })
  @IsOptional()
  @IsEnum(['active', 'inactive', 'graduated'])
  status?: 'active' | 'inactive' | 'graduated';
}