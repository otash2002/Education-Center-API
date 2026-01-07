import { IsString, IsOptional } from 'class-validator';

export class UpdateScheduleDto {
  @IsOptional()
  @IsString()
  day?: 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday' | 'Sunday';

  @IsOptional()
  @IsString()
  startTime?: string;

  @IsOptional()
  @IsString()
  endTime?: string;

  @IsOptional()
  @IsString()
  roomNumber?: string;
}
