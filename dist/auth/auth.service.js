"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const config_1 = require("@nestjs/config");
const bcrypt = __importStar(require("bcrypt"));
const prisma_service_1 = require("../prisma/prisma.service");
let AuthService = class AuthService {
    prisma;
    jwtService;
    configService;
    constructor(prisma, jwtService, configService) {
        this.prisma = prisma;
        this.jwtService = jwtService;
        this.configService = configService;
    }
    async staffLogin(loginDto) {
        const { username, password } = loginDto;
        const staff = await this.prisma.staff.findUnique({
            where: { username },
        });
        if (!staff) {
            throw new common_1.UnauthorizedException('Invalid credentials');
        }
        const isPasswordValid = await bcrypt.compare(password, staff.password);
        if (!isPasswordValid) {
            throw new common_1.UnauthorizedException('Invalid credentials');
        }
        const payload = {
            sub: staff.id,
            username: staff.username,
            role: staff.role,
            type: 'staff',
        };
        const token = this.jwtService.sign(payload);
        return {
            success: true,
            token,
            staff: {
                id: staff.id,
                firstName: staff.firstName,
                lastName: staff.lastName,
                username: staff.username,
                role: staff.role,
                position: staff.position,
            },
        };
    }
    async studentLogin(loginDto) {
        const { username, password } = loginDto;
        const student = await this.prisma.student.findUnique({
            where: { username },
        });
        if (!student || !student.password) {
            throw new common_1.UnauthorizedException('Invalid credentials');
        }
        const isPasswordValid = await bcrypt.compare(password, student.password);
        if (!isPasswordValid) {
            throw new common_1.UnauthorizedException('Invalid credentials');
        }
        const payload = {
            sub: student.id,
            username: student.username,
            role: 'STUDENT',
            type: 'student',
        };
        const token = this.jwtService.sign(payload);
        return {
            success: true,
            token,
            student: {
                id: student.id,
                firstName: student.firstName,
                lastName: student.lastName,
                username: student.username,
            },
        };
    }
    async registerStaff(registerDto) {
        const { username, password, confirmPassword, firstName, lastName, role, position, phone, address } = registerDto;
        if (password !== confirmPassword) {
            throw new common_1.BadRequestException('Passwords do not match');
        }
        const existingStaff = await this.prisma.staff.findUnique({
            where: { username },
        });
        if (existingStaff) {
            throw new common_1.BadRequestException('Username already exists');
        }
        const hashedPassword = await this.hashPassword(password);
        const staff = await this.prisma.staff.create({
            data: {
                firstName,
                lastName,
                username,
                password: hashedPassword,
                role: role.toUpperCase(),
                position,
                phone,
                address,
            },
        });
        const payload = {
            sub: staff.id,
            username: staff.username,
            role: staff.role,
            type: 'staff',
        };
        const token = this.jwtService.sign(payload);
        return {
            success: true,
            message: 'Staff registered successfully',
            token,
            staff: {
                id: staff.id,
                firstName: staff.firstName,
                lastName: staff.lastName,
                username: staff.username,
                role: staff.role,
                position: staff.position,
            },
        };
    }
    async registerStudent(registerDto) {
        const { username, password, confirmPassword, firstName, lastName, phone, address, birthDate } = registerDto;
        if (password !== confirmPassword) {
            throw new common_1.BadRequestException('Passwords do not match');
        }
        const existingStudent = await this.prisma.student.findUnique({
            where: { username },
        });
        if (existingStudent) {
            throw new common_1.BadRequestException('Username already exists');
        }
        const hashedPassword = await this.hashPassword(password);
        const student = await this.prisma.student.create({
            data: {
                firstName,
                lastName,
                username,
                password: hashedPassword,
                phone,
                address,
                birthDate: birthDate ? new Date(birthDate) : null,
            },
        });
        const payload = {
            sub: student.id,
            username: student.username,
            role: 'STUDENT',
            type: 'student',
        };
        const token = this.jwtService.sign(payload);
        return {
            success: true,
            message: 'Student registered successfully',
            token,
            student: {
                id: student.id,
                firstName: student.firstName,
                lastName: student.lastName,
                username: student.username,
            },
        };
    }
    async hashPassword(password) {
        const salt = await bcrypt.genSalt(10);
        return bcrypt.hash(password, salt);
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        jwt_1.JwtService,
        config_1.ConfigService])
], AuthService);
//# sourceMappingURL=auth.service.js.map