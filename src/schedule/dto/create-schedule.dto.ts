import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString, IsEnum } from 'class-validator';

export class CreateScheduleDto {
  @ApiProperty({ 
    example: 1, 
    description: 'Dars jadvali biriktiriladigan guruhning ID raqami' 
  })
  @IsNumber()
  groupId: number;

  @ApiProperty({ 
    example: 'Monday', 
    enum: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    description: 'Hafta kuni' 
  })
  @IsEnum(['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'])
  day: 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday' | 'Sunday';

  @ApiProperty({ 
    example: '14:00', 
    description: 'Dars boshlanish vaqti (HH:mm formatida)' 
  })
  @IsString()
  startTime: string;

  @ApiProperty({ 
    example: '16:00', 
    description: 'Dars tugash vaqti (HH:mm formatida)' 
  })
  @IsString()
  endTime: string;

  @ApiProperty({ 
    example: 'Room 204', 
    description: 'Dars o‘tiladigan xona nomi yoki raqami' 
  })
  @IsString()
  roomNumber: string;
}