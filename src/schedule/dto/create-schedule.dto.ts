import { IsNumber, IsString } from 'class-validator';

export class CreateScheduleDto {
  @IsNumber()
  groupId: number;

  @IsString()
  day: 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday' | 'Sunday';

  @IsString()
  startTime: string;

  @IsString()
  endTime: string;

  @IsString()
  roomNumber: string;
}
