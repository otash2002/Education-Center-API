import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsEmail, MinLength, IsOptional, IsPhoneNumber, IsEnum } from 'class-validator';

export class CreateStaffDto {
  @ApiProperty({ 
    example: 'Alisher', 
    description: 'Xodimning ismi' 
  })
  @IsString()
  firstName: string;

  @ApiProperty({ 
    example: 'Navoiy', 
    description: 'Xodimning familiyasi' 
  })
  @IsString()
  lastName: string;

  @ApiProperty({ 
    example: 'alisher_dev', 
    description: 'Tizimga kirish uchun login (username)' 
  })
  @IsString()
  username: string;

  @ApiProperty({ 
    example: 'pass123456', 
    description: 'Kamida 6 ta belgidan iborat parol',
    minLength: 6 
  })
  @IsString()
  @MinLength(6)
  password: string;

  @ApiProperty({ 
    example: 'teacher', 
    enum: ['superadmin', 'admin', 'teacher'],
    description: 'Xodimning tizimdagi roli va ruxsat darajasi' 
  })
  @IsEnum(['superadmin', 'admin', 'teacher'])
  role: 'superadmin' | 'admin' | 'teacher';

  @ApiProperty({ 
    example: 'Matematika o‘qituvchisi', 
    description: 'Xodimning lavozimi' 
  })
  @IsString()
  position: string;

  @ApiProperty({ 
    example: '+998901234567', 
    description: 'O‘zbekiston telefon raqami formati',
    required: false 
  })
  @IsOptional()
  @IsPhoneNumber('UZ')
  phone?: string;

  @ApiProperty({ 
    example: 'Toshkent sh., Chilonzor tumani', 
    description: 'Xodimning yashash manzili',
    required: false 
  })
  @IsOptional()
  @IsString()
  address?: string;
}