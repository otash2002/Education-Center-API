import { IsString, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class LoginDto {
  @ApiProperty({
    example: 'alisher',
    description: 'Foydalanuvchi nomi (username)',
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
}
