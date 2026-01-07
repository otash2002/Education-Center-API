import { Controller, Get, Post, Body, Param, Delete, UseGuards, HttpCode } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiBearerAuth } from '@nestjs/swagger';
import { JwtAuthGuard } from '../common/guards/jwt-auth.guard';
import { RolesGuard } from '../common/guards/roles.guard';
import { Roles } from '../common/decorators/roles.decorator';
import { CurrentUser } from '../common/decorators/current-user.decorator';
import { AttendanceService } from './attendance.service';
import { CreateAttendanceDto } from './dto';

@ApiTags('Attendance')
@Controller('attendance')
@ApiBearerAuth()
export class AttendanceController {
  constructor(private readonly attendanceService: AttendanceService) {}

  @Post()
  @HttpCode(201)
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('ADMIN', 'SUPERADMIN', 'TEACHER')
  @ApiOperation({ summary: 'Davomat kiritish' })
  async create(@Body() createAttendanceDto: CreateAttendanceDto, @CurrentUser() user: any) {
    return this.attendanceService.create(createAttendanceDto, user.sub);
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: 'Barcha davomatni olish' })
  async findAll() {
    return this.attendanceService.findAll();
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: 'Davomatni ID orqali olish' })
  async findOne(@Param('id') id: string) {
    return this.attendanceService.findOne(+id);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('SUPERADMIN')
  @HttpCode(200)
  @ApiOperation({ summary: 'Davomatni o\'chirish' })
  async remove(@Param('id') id: string) {
    return this.attendanceService.remove(+id);
  }
}
