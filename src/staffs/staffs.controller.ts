import { Controller, Get, Post, Body, Param, Delete, UseGuards, HttpCode } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';
import { JwtAuthGuard } from '../common/guards/jwt-auth.guard';
import { RolesGuard } from '../common/guards/roles.guard';
import { Roles } from '../common/decorators/roles.decorator';
import { CurrentUser } from '../common/decorators/current-user.decorator';
import { StaffsService } from './staffs.service';
import { CreateStaffDto, UpdateStaffDto } from './dto';

@ApiTags('Staffs')
@Controller('staffs')
@ApiBearerAuth()
export class StaffsController {
  constructor(private readonly staffsService: StaffsService) {}

  @Post()
  @HttpCode(201)
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('ADMIN', 'SUPERADMIN')
  @ApiOperation({
    summary: 'Yangi xodim yaratish',
    description: 'Faqat ADMIN va SUPERADMIN yaratishi mumkin',
  })
  @ApiResponse({ status: 201, description: 'Xodim yaratildi' })
  @ApiResponse({ status: 403, description: 'Ruxsat yo\'q' })
  async create(@Body() createStaffDto: CreateStaffDto) {
    return this.staffsService.create(createStaffDto);
  }

  @Get()
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('ADMIN', 'SUPERADMIN')
  @ApiOperation({
    summary: 'Barcha xodimlarni olish',
    description: 'Faqat ADMIN va SUPERADMIN ko\'rishi mumkin',
  })
  @ApiResponse({ status: 200, description: 'Xodimlar ro\'yxati' })
  async findAll() {
    return this.staffsService.findAll();
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('ADMIN', 'SUPERADMIN')
  @ApiOperation({
    summary: 'Xodimni ID orqali olish',
    description: 'Faqat ADMIN va SUPERADMIN ko\'rishi mumkin',
  })
  async findOne(@Param('id') id: string) {
    return this.staffsService.findOne(+id);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('SUPERADMIN')
  @HttpCode(200)
  @ApiOperation({
    summary: 'Xodimni o\'chirish',
    description: 'Faqat SUPERADMIN o\'chirishi mumkin',
  })
  @ApiResponse({ status: 200, description: 'Xodim o\'chirildi' })
  @ApiResponse({ status: 403, description: 'Faqat SUPERADMIN' })
  async remove(@Param('id') id: string) {
    return this.staffsService.remove(+id);
  }
}
