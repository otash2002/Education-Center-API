import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsOptional, IsEnum } from 'class-validator';

export class UpdateScheduleDto {
  @ApiProperty({ 
    example: 'Friday', 
    enum: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    description: 'Dars kunini o‘zgartirish',
    required: false 
  })
  @IsOptional()
  @IsEnum(['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'])
  day?: 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday' | 'Sunday';

  @ApiProperty({ 
    example: '09:00', 
    description: 'Yangi boshlanish vaqti (HH:mm)',
    required: false 
  })
  @IsOptional()
  @IsString()
  startTime?: string;

  @ApiProperty({ 
    example: '11:00', 
    description: 'Yangi tugash vaqti (HH:mm)',
    required: false 
  })
  @IsOptional()
  @IsString()
  endTime?: string;

  @ApiProperty({ 
    example: 'Lab-2', 
    description: 'Dars o‘tiladigan xonani o‘zgartirish',
    required: false 
  })
  @IsOptional()
  @IsString()
  roomNumber?: string;
}