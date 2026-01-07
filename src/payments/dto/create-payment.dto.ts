import { IsNumber, IsString, IsDateString, IsOptional } from 'class-validator';

export class CreatePaymentDto {
  @IsNumber()
  studentId: number;

  @IsNumber()
  groupId: number;

  @IsNumber()
  amount: number;

  @IsDateString()
  paymentDate: string;

  @IsString()
  paymentMethod: 'cash' | 'card' | 'transfer';

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsString()
  receiptNumber?: string;
}
