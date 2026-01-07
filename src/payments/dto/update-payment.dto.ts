import { IsNumber, IsString, IsDateString, IsOptional } from 'class-validator';

export class UpdatePaymentDto {
  @IsOptional()
  @IsNumber()
  amount?: number;

  @IsOptional()
  @IsDateString()
  paymentDate?: string;

  @IsOptional()
  @IsString()
  paymentMethod?: 'cash' | 'card' | 'transfer';

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsString()
  receiptNumber?: string;
}
