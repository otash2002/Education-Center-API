import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString, IsDateString, IsOptional, IsEnum, Min } from 'class-validator';

export class CreatePaymentDto {
  @ApiProperty({ 
    example: 101, 
    description: 'To‘lov qilayotgan talabaning ID raqami' 
  })
  @IsNumber()
  studentId: number;

  @ApiProperty({ 
    example: 1, 
    description: 'Qaysi guruh uchun to‘lov qilinayotgani (Guruh ID raqami)' 
  })
  @IsNumber()
  groupId: number;

  @ApiProperty({ 
    example: 800000, 
    description: 'To‘lov summasi (so‘mda)' 
  })
  @IsNumber()
  @Min(0)
  amount: number;

  @ApiProperty({ 
    example: '2024-02-15', 
    description: 'To‘lov amalga oshirilgan sana (YYYY-MM-DD)' 
  })
  @IsDateString()
  paymentDate: string;

  @ApiProperty({ 
    example: 'card', 
    enum: ['cash', 'card', 'transfer'],
    description: 'To‘lov turi: naqd, karta yoki bank o‘tkazmasi' 
  })
  @IsEnum(['cash', 'card', 'transfer'])
  paymentMethod: 'cash' | 'card' | 'transfer';

  @ApiProperty({ 
    example: 'Fevral oyi uchun to‘lov', 
    description: 'To‘lov haqida qo‘shimcha izoh',
    required: false 
  })
  @IsOptional()
  @IsString()
  description?: string;

  @ApiProperty({ 
    example: 'REC-7788', 
    description: 'Kvitansiya yoki chek raqami',
    required: false 
  })
  @IsOptional()
  @IsString()
  receiptNumber?: string;
}