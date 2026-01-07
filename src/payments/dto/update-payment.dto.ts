import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString, IsDateString, IsOptional, IsEnum, Min } from 'class-validator';

export class UpdatePaymentDto {
  @ApiProperty({ 
    example: 850000, 
    description: 'To‘lov summasini tahrirlash',
    required: false 
  })
  @IsOptional()
  @IsNumber()
  @Min(0)
  amount?: number;

  @ApiProperty({ 
    example: '2024-02-16', 
    description: 'To‘lov sanasini o‘zgartirish (YYYY-MM-DD)',
    required: false 
  })
  @IsOptional()
  @IsDateString()
  paymentDate?: string;

  @ApiProperty({ 
    example: 'transfer', 
    enum: ['cash', 'card', 'transfer'],
    description: 'To‘lov usulini o‘zgartirish',
    required: false 
  })
  @IsOptional()
  @IsEnum(['cash', 'card', 'transfer'])
  paymentMethod?: 'cash' | 'card' | 'transfer';

  @ApiProperty({ 
    example: 'To‘lov summasi xato kiritilgani sababli tuzatildi', 
    description: 'Tahrirlash sababi yoki qo‘shimcha izoh',
    required: false 
  })
  @IsOptional()
  @IsString()
  description?: string;

  @ApiProperty({ 
    example: 'REC-9900', 
    description: 'Yangi kvitansiya raqami',
    required: false 
  })
  @IsOptional()
  @IsString()
  receiptNumber?: string;
}