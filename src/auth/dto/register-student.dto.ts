import { IsString, MinLength, IsOptional, IsDateString, IsPhoneNumber } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class RegisterStudentDto {
  @ApiProperty({
    example: 'Aziz',
    description: 'O\'quvchining ismi',
    type: String,
  })
  @IsString()
  firstName: string;

  @ApiProperty({
    example: 'Ismoilov',
    description: 'O\'quvchining familiyasi',
    type: String,
  })
  @IsString()
  lastName: string;

  @ApiProperty({
    example: 'aziz',
    description: 'Tizimga kirish uchun foydalanuvchi nomi',
    type: String,
  })
  @IsString()
  username: string;

  @ApiProperty({
    example: 'password123',
    description: 'Parol (minimal 6 ta belgi)',
    type: String,
    minLength: 6,
  })
  @IsString()
  @MinLength(6)
  password: string;

  @ApiProperty({
    example: 'password123',
    description: 'Parolni qayta kiriting (bir xil bo\'lishi kerak)',
    type: String,
    minLength: 6,
  })
  @IsString()
  @MinLength(6)
  confirmPassword: string;

  @ApiPropertyOptional({
    example: '+998901234567',
    description: 'Telefon raqami (Ozbekiston formati)',
    type: String,
  })
  @IsOptional()
  @IsPhoneNumber('UZ')
  phone?: string;

  @ApiPropertyOptional({
    example: 'Toshkent, Yunusobod',
    description: 'Manzil',
    type: String,
  })
  @IsOptional()
  @IsString()
  address?: string;

  @ApiPropertyOptional({
    example: '2005-05-15',
    description: 'Tug\'ilgan sanasi (YYYY-MM-DD format)',
    type: String,
    format: 'date',
  })
  @IsOptional()
  @IsDateString()
  birthDate?: string;
}
