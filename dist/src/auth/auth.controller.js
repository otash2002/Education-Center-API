"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const auth_service_1 = require("./auth.service");
const dto_1 = require("./dto");
let AuthController = class AuthController {
    authService;
    constructor(authService) {
        this.authService = authService;
    }
    async staffLogin(loginDto) {
        return this.authService.staffLogin(loginDto);
    }
    async studentLogin(loginDto) {
        return this.authService.studentLogin(loginDto);
    }
    async registerStaff(registerDto) {
        return this.authService.registerStaff(registerDto);
    }
    async registerStudent(registerDto) {
        return this.authService.registerStudent(registerDto);
    }
};
exports.AuthController = AuthController;
__decorate([
    (0, common_1.Post)('staff/login'),
    (0, common_1.HttpCode)(200),
    (0, swagger_1.ApiOperation)({
        summary: 'Xodim sifatida tizimga kirish',
        description: 'Username va password orqali xodim login qilish. Admin, Superadmin yoki Teacher bo\'lishi mumkin.',
    }),
    (0, swagger_1.ApiBody)({
        type: dto_1.LoginDto,
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
    }),
    (0, swagger_1.ApiResponse)({
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
    }),
    (0, swagger_1.ApiResponse)({
        status: 401,
        description: 'Invalid username yoki password',
        example: {
            message: 'Invalid credentials',
            statusCode: 401,
        },
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.LoginDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "staffLogin", null);
__decorate([
    (0, common_1.Post)('student/login'),
    (0, common_1.HttpCode)(200),
    (0, swagger_1.ApiOperation)({
        summary: 'O\'quvchi sifatida tizimga kirish',
        description: 'Username va password orqali o\'quvchi login qilish.',
    }),
    (0, swagger_1.ApiBody)({
        type: dto_1.LoginDto,
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
    }),
    (0, swagger_1.ApiResponse)({
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
    }),
    (0, swagger_1.ApiResponse)({
        status: 401,
        description: 'Invalid username yoki password',
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.LoginDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "studentLogin", null);
__decorate([
    (0, common_1.Post)('staff/register'),
    (0, common_1.HttpCode)(201),
    (0, swagger_1.ApiOperation)({
        summary: 'Yangi xodim ro\'yxatdan o\'tish',
        description: 'Admin va Superadmin bo\'lmagan xodimlar uchun ro\'yxatdan o\'tish. Password va confirmPassword bir xil bo\'lishi kerak.',
    }),
    (0, swagger_1.ApiBody)({
        type: dto_1.RegisterStaffDto,
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
    }),
    (0, swagger_1.ApiResponse)({
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
    }),
    (0, swagger_1.ApiResponse)({
        status: 400,
        description: 'Password muvofiqat kelmadi yoki username allaqachon mavjud',
        example: {
            message: 'Username already exists',
            statusCode: 400,
        },
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.RegisterStaffDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "registerStaff", null);
__decorate([
    (0, common_1.Post)('student/register'),
    (0, common_1.HttpCode)(201),
    (0, swagger_1.ApiOperation)({
        summary: 'Yangi o\'quvchi ro\'yxatdan o\'tish',
        description: 'O\'quvchi sifatida ro\'yxatdan o\'tish. Password va confirmPassword bir xil bo\'lishi kerak.',
    }),
    (0, swagger_1.ApiBody)({
        type: dto_1.RegisterStudentDto,
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
    }),
    (0, swagger_1.ApiResponse)({
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
    }),
    (0, swagger_1.ApiResponse)({
        status: 400,
        description: 'Password muvofiqat kelmadi yoki username allaqachon mavjud',
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.RegisterStudentDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "registerStudent", null);
exports.AuthController = AuthController = __decorate([
    (0, swagger_1.ApiTags)('Authentication'),
    (0, common_1.Controller)('auth'),
    __metadata("design:paramtypes", [auth_service_1.AuthService])
], AuthController);
//# sourceMappingURL=auth.controller.js.map