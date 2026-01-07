import { Controller, Get, Post, Body, Param, Delete, UseGuards, HttpCode } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';
import { JwtAuthGuard } from '../common/guards/jwt-auth.guard';
import { RolesGuard } from '../common/guards/roles.guard';
import { Roles } from '../common/decorators/roles.decorator';
import { CurrentUser } from '../common/decorators/current-user.decorator';
import { StudentsService } from './students.service';
import { CreateStudentDto, UpdateStudentDto } from './dto';

@ApiTags('Students')
@Controller('students')
@ApiBearerAuth()
export class StudentsController {
  constructor(private readonly studentsService: StudentsService) {}

  @Post()
  @HttpCode(201)
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('ADMIN', 'SUPERADMIN')
  @ApiOperation({
    summary: 'Yangi o\'quvchi yaratish',
    description: 'Faqat ADMIN va SUPERADMIN yaratishi mumkin',
  })
  @ApiResponse({ status: 201, description: 'O\'quvchi yaratildi' })
  async create(@Body() createStudentDto: CreateStudentDto) {
    return this.studentsService.create(createStudentDto);
  }

  @Get()
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('ADMIN', 'SUPERADMIN', 'TEACHER')
  @ApiOperation({
    summary: 'Barcha o\'quvchilarni olish',
    description: 'ADMIN, SUPERADMIN, TEACHER ko\'rishi mumkin',
  })
  async findAll() {
    return this.studentsService.findAll();
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('ADMIN', 'SUPERADMIN', 'TEACHER', 'STUDENT')
  @ApiOperation({
    summary: 'O\'quvchini ID orqali olish',
    description: 'ADMIN, SUPERADMIN, TEACHER va STUDENT o\'z ma\'lumotlarini ko\'rishi mumkin',
  })
  async findOne(@Param('id') id: string, @CurrentUser() user: any) {
    // Students can only see their own data
    if (user.role === 'STUDENT' && user.userId !== +id) {
      throw new Error('Forbidden: You can only access your own data');
    }
    return this.studentsService.findOne(+id);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('SUPERADMIN')
  @HttpCode(200)
  @ApiOperation({
    summary: 'O\'quvchini o\'chirish',
    description: 'Faqat SUPERADMIN o\'chirishi mumkin',
  })
  async remove(@Param('id') id: string) {
    return this.studentsService.remove(+id);
  }
}
