import { ApiProperty } from '@nestjs/swagger';
import { IsString, MinLength, IsOptional, IsPhoneNumber, IsEnum } from 'class-validator';

export class UpdateStaffDto {
  @ApiProperty({ 
    example: 'Mansur', 
    description: 'Xodim ismini o‘zgartirish', 
    required: false 
  })
  @IsOptional()
  @IsString()
  firstName?: string;

  @ApiProperty({ 
    example: 'Karimov', 
    description: 'Xodim familiyasini o‘zgartirish', 
    required: false 
  })
  @IsOptional()
  @IsString()
  lastName?: string;

  @ApiProperty({ 
    example: 'newpass123', 
    description: 'Yangi parol (kamida 6 ta belgi)', 
    required: false,
    minLength: 6 
  })
  @IsOptional()
  @IsString()
  @MinLength(6)
  password?: string;

  @ApiProperty({ 
    example: 'Senior Teacher', 
    description: 'Lavozimni yangilash', 
    required: false 
  })
  @IsOptional()
  @IsString()
  position?: string;

  @ApiProperty({ 
    example: '+998909876543', 
    description: 'Yangi telefon raqami (+998 formatida)', 
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
    example: 'active', 
    enum: ['active', 'inactive'],
    description: 'Xodimning tizimdagi holati', 
    required: false 
  })
  @IsOptional()
  @IsEnum(['active', 'inactive'])
  status?: 'active' | 'inactive';
}