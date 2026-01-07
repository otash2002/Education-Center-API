import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsOptional, IsDateString, IsPhoneNumber } from 'class-validator';

export class CreateStudentDto {
  @ApiProperty({ 
    example: 'Asadbek', 
    description: 'Talabaning ismi' 
  })
  @IsString()
  firstName: string;

  @ApiProperty({ 
    example: 'Olimov', 
    description: 'Talabaning familiyasi' 
  })
  @IsString()
  lastName: string;

  @ApiProperty({ 
    example: 'asad_01', 
    description: 'Tizimga kirish uchun login (ixtiyoriy)',
    required: false 
  })
  @IsOptional()
  @IsString()
  username?: string;

  @ApiProperty({ 
    example: 'student123', 
    description: 'Tizimga kirish uchun parol (ixtiyoriy)',
    required: false 
  })
  @IsOptional()
  @IsString()
  password?: string;

  @ApiProperty({ 
    example: '+998911234567', 
    description: 'Talaba yoki ota-onasining telefon raqami',
    required: false 
  })
  @IsOptional()
  @IsPhoneNumber('UZ')
  phone?: string;

  @ApiProperty({ 
    example: 'Toshkent sh., Olmazor tumani', 
    description: 'Talabaning yashash manzili',
    required: false 
  })
  @IsOptional()
  @IsString()
  address?: string;

  @ApiProperty({ 
    example: '2008-05-20', 
    description: 'Talabaning tug‘ilgan sanasi (YYYY-MM-DD)',
    required: false 
  })
  @IsOptional()
  @IsDateString()
  birthDate?: string;
}