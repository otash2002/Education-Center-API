import { Controller, Post, Body, HttpCode } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiBody, ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import {
  LoginDto,
  RegisterStaffDto,
  RegisterStudentDto,
} from './dto';

@ApiTags('Authentication')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('staff/login')
  @HttpCode(200)
  @ApiOperation({
    summary: 'Xodim sifatida tizimga kirish',
    description: 'Username va password orqali xodim login qilish. Admin, Superadmin yoki Teacher bo\'lishi mumkin.',
  })
  @ApiBody({
    type: LoginDto,
    examples: {
      admin: {
        value: {
          username: 'alisher',
          password: 'password123',
        },
        description: 'Admin xodim login',
      },
      teacher: {
        value: {
          username: 'mansur',
          password: 'password123',
        },
        description: 'O\'qituvchi login',
      },
    },
  })
  @ApiResponse({
    status: 200,
    description: 'Muvaffaqiyatli login. JWT token qaytadi.',
    example: {
      success: true,
      token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsInVzZXJuYW1lIjoiYWxpc2hlciIsInJvbGUiOiJBRE1JTiIsInR5cGUiOiJzdGFmZiJ9.abc123',
      staff: {
        id: 1,
        firstName: 'Alisher',
        lastName: 'Alimov',
        username: 'alisher',
        role: 'ADMIN',
        position: 'Administrator',
      },
    },
  })
  @ApiResponse({
    status: 401,
    description: 'Invalid username yoki password',
    example: {
      message: 'Invalid credentials',
      statusCode: 401,
    },
  })
  async staffLogin(@Body() loginDto: LoginDto) {
    return this.authService.staffLogin(loginDto);
  }

  @Post('student/login')
  @HttpCode(200)
  @ApiOperation({
    summary: 'O\'quvchi sifatida tizimga kirish',
    description: 'Username va password orqali o\'quvchi login qilish.',
  })
  @ApiBody({
    type: LoginDto,
    examples: {
      student1: {
        value: {
          username: 'aziz',
          password: 'password123',
        },
        description: 'O\'quvchi login',
      },
      student2: {
        value: {
          username: 'sara',
          password: 'securepass123',
        },
        description: 'Boshqa o\'quvchi',
      },
    },
  })
  @ApiResponse({
    status: 200,
    description: 'Muvaffaqiyatli login. JWT token qaytadi.',
    example: {
      success: true,
      token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsInVzZXJuYW1lIjoiYXppeiIsInJvbGUiOiJTVFVERVhUIiwidHlwZSI6InN0dWRlbnQifQ.xyz789',
      student: {
        id: 1,
        firstName: 'Aziz',
        lastName: 'Ismoilov',
        username: 'aziz',
      },
    },
  })
  @ApiResponse({
    status: 401,
    description: 'Invalid username yoki password',
  })
  async studentLogin(@Body() loginDto: LoginDto) {
    return this.authService.studentLogin(loginDto);
  }

  @Post('staff/register')
  @HttpCode(201)
  @ApiOperation({
    summary: 'Yangi xodim ro\'yxatdan o\'tish',
    description: 'Admin va Superadmin bo\'lmagan xodimlar uchun ro\'yxatdan o\'tish. Password va confirmPassword bir xil bo\'lishi kerak.',
  })
  @ApiBody({
    type: RegisterStaffDto,
    examples: {
      admin: {
        value: {
          firstName: 'Mansur',
          lastName: 'Karimov',
          username: 'mansur',
          password: 'password123',
          confirmPassword: 'password123',
          role: 'teacher',
          position: 'O\'qituvchi',
          phone: '+998901234567',
          address: 'Toshkent, Chilonzor',
        },
        description: 'O\'qituvchi ro\'yxatdan o\'tish',
      },
      admin2: {
        value: {
          firstName: 'Sohibjon',
          lastName: 'Nazarov',
          username: 'sohibjon',
          password: 'securepass123',
          confirmPassword: 'securepass123',
          role: 'admin',
          position: 'Administrator',
          phone: '+998912345678',
          address: 'Toshkent, Yunusobod',
        },
        description: 'Administrator ro\'yxatdan o\'tish',
      },
    },
  })
  @ApiResponse({
    status: 201,
    description: 'Xodim muvaffaqiyatli ro\'yxatdan o\'ttdi. JWT token qaytadi.',
    example: {
      success: true,
      message: 'Staff registered successfully',
      token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjIsInVzZXJuYW1lIjoibWFuc3VyIiwicm9sZSI6IlRFQUNIRVIiLCJ0eXBlIjoic3RhZmYifQ.def456',
      staff: {
        id: 2,
        firstName: 'Mansur',
        lastName: 'Karimov',
        username: 'mansur',
        role: 'TEACHER',
        position: 'O\'qituvchi',
      },
    },
  })
  @ApiResponse({
    status: 400,
    description: 'Password muvofiqat kelmadi yoki username allaqachon mavjud',
    example: {
      message: 'Username already exists',
      statusCode: 400,
    },
  })
  async registerStaff(@Body() registerDto: RegisterStaffDto) {
    return this.authService.registerStaff(registerDto);
  }

  @Post('student/register')
  @HttpCode(201)
  @ApiOperation({
    summary: 'Yangi o\'quvchi ro\'yxatdan o\'tish',
    description: 'O\'quvchi sifatida ro\'yxatdan o\'tish. Password va confirmPassword bir xil bo\'lishi kerak.',
  })
  @ApiBody({
    type: RegisterStudentDto,
    examples: {
      student1: {
        value: {
          firstName: 'Aziz',
          lastName: 'Ismoilov',
          username: 'aziz',
          password: 'password123',
          confirmPassword: 'password123',
          phone: '+998901234567',
          address: 'Toshkent, Yunusobod',
          birthDate: '2005-05-15',
        },
        description: 'O\'quvchi ro\'yxatdan o\'tish',
      },
      student2: {
        value: {
          firstName: 'Sara',
          lastName: 'Khan',
          username: 'sara',
          password: 'securepass123',
          confirmPassword: 'securepass123',
          phone: '+998912345678',
          address: 'Samarqand',
          birthDate: '2004-03-20',
        },
        description: 'Boshqa o\'quvchi ro\'yxatdan o\'tish',
      },
    },
  })
  @ApiResponse({
    status: 201,
    description: 'O\'quvchi muvaffaqiyatli ro\'yxatdan o\'ttdi. JWT token qaytadi.',
    example: {
      success: true,
      message: 'Student registered successfully',
      token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsInVzZXJuYW1lIjoiYXppeiIsInJvbGUiOiJTVFVERU5UIiwidHlwZSI6InN0dWRlbnQifQ.ghi789',
      student: {
        id: 1,
        firstName: 'Aziz',
        lastName: 'Ismoilov',
        username: 'aziz',
      },
    },
  })
  @ApiResponse({
    status: 400,
    description: 'Password muvofiqat kelmadi yoki username allaqachon mavjud',
  })
  async registerStudent(@Body() registerDto: RegisterStudentDto) {
    return this.authService.registerStudent(registerDto);
  }
}
