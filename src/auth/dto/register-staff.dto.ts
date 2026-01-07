import { IsString, MinLength, IsOptional, IsPhoneNumber } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class RegisterStaffDto {
  @ApiProperty({
    example: 'Mansur',
    description: 'Xodimning ismi',
    type: String,
  })
  @IsString()
  firstName: string;

  @ApiProperty({
    example: 'Karimov',
    description: 'Xodimning familiyasi',
    type: String,
  })
  @IsString()
  lastName: string;

  @ApiProperty({
    example: 'mansur',
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

  @ApiProperty({
    example: 'teacher',
    description: 'Xodimning roli: teacher, admin, superadmin',
    enum: ['teacher', 'admin', 'superadmin'],
    type: String,
  })
  @IsString()
  role: 'superadmin' | 'admin' | 'teacher';

  @ApiProperty({
    example: 'O\'qituvchi',
    description: 'Xodimning pozitsiyasi',
    type: String,
  })
  @IsString()
  position: string;

  @ApiPropertyOptional({
    example: '+998901234567',
    description: 'Telefon raqami (Ozbekiston formati)',
    type: String,
  })
  @IsOptional()
  @IsPhoneNumber('UZ')
  phone?: string;

  @ApiPropertyOptional({
    example: 'Toshkent, Chilonzor',
    description: 'Manzil',
    type: String,
  })
  @IsOptional()
  @IsString()
  address?: string;
}
