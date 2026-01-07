import { IsString, IsEmail, MinLength, IsOptional, IsPhoneNumber } from 'class-validator';

export class CreateStaffDto {
  @IsString()
  firstName: string;

  @IsString()
  lastName: string;

  @IsString()
  username: string;

  @IsString()
  @MinLength(6)
  password: string;

  @IsString()
  role: 'superadmin' | 'admin' | 'teacher';

  @IsString()
  position: string;

  @IsOptional()
  @IsPhoneNumber('UZ')
  phone?: string;

  @IsOptional()
  @IsString()
  address?: string;
}
