import { Controller, Post, Body, HttpCode } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { LoginDto, RegisterStaffDto, RegisterStudentDto } from './dto';

@ApiTags('Authentication')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('staff/login')
  @HttpCode(200)
  @ApiOperation({ 
    summary: 'Xodim login', 
    description: 'Admin, Superadmin yoki Teacher login qilish.' 
  })
  @ApiResponse({ status: 200, description: 'Muvaffaqiyatli login. JWT token qaytadi.' })
  @ApiResponse({ status: 401, description: 'Username yoki parol noto‘g‘ri' })
  async staffLogin(@Body() loginDto: LoginDto) {
    return this.authService.staffLogin(loginDto);
  }

  @Post('student/login')
  @HttpCode(200)
  @ApiOperation({ 
    summary: 'O\'quvchi login', 
    description: 'Username va password orqali o\'quvchi login qilish.' 
  })
  @ApiResponse({ status: 200, description: 'Muvaffaqiyatli login. JWT token qaytadi.' })
  @ApiResponse({ status: 401, description: 'Username yoki parol noto‘g‘ri' })
  async studentLogin(@Body() loginDto: LoginDto) {
    return this.authService.studentLogin(loginDto);
  }

  @Post('staff/register')
  @HttpCode(201)
  @ApiOperation({ 
    summary: 'Xodim ro\'yxatdan o\'tishi', 
    description: 'Yangi xodim qo\'shish (Admin/Teacher).' 
  })
  @ApiResponse({ status: 201, description: 'Xodim muvaffaqiyatli yaratildi.' })
  @ApiResponse({ status: 400, description: 'Parollar mos emas yoki username band.' })
  async registerStaff(@Body() registerDto: RegisterStaffDto) {
    return this.authService.registerStaff(registerDto);
  }

  @Post('student/register')
  @HttpCode(201)
  @ApiOperation({ 
    summary: 'O\'quvchi ro\'yxatdan o\'tishi', 
    description: 'Yangi o\'quvchi sifatida ro\'yxatdan o\'tish.' 
  })
  @ApiResponse({ status: 201, description: 'O\'quvchi muvaffaqiyatli yaratildi.' })
  @ApiResponse({ status: 400, description: 'Xatolik yuz berdi.' })
  async registerStudent(@Body() registerDto: RegisterStudentDto) {
    return this.authService.registerStudent(registerDto);
  }
}