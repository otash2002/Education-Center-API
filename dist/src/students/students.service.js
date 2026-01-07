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
exports.StudentsService = void 0;
const common_1 = require("@nestjs/common");
const bcrypt = __importStar(require("bcrypt"));
const prisma_service_1 = require("../prisma/prisma.service");
let StudentsService = class StudentsService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createStudentDto) {
        const { username, password, firstName, lastName, phone, address, birthDate } = createStudentDto;
        if (username) {
            const existingStudent = await this.prisma.student.findUnique({
                where: { username },
            });
            if (existingStudent) {
                throw new common_1.BadRequestException('Username already exists');
            }
        }
        const hashedPassword = password ? await bcrypt.hash(password, 10) : null;
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
        const { password: _, ...studentWithoutPassword } = student;
        return {
            success: true,
            message: 'Student created successfully',
            student: studentWithoutPassword,
        };
    }
    async findAll() {
        const students = await this.prisma.student.findMany({
            select: {
                id: true,
                firstName: true,
                lastName: true,
                username: true,
                phone: true,
                address: true,
                birthDate: true,
                status: true,
                enrollmentDate: true,
                createdAt: true,
                updatedAt: true,
            },
        });
        return {
            success: true,
            count: students.length,
            students,
        };
    }
    async findOne(id) {
        const student = await this.prisma.student.findUnique({
            where: { id },
            select: {
                id: true,
                firstName: true,
                lastName: true,
                username: true,
                phone: true,
                address: true,
                birthDate: true,
                status: true,
                enrollmentDate: true,
                createdAt: true,
                updatedAt: true,
            },
        });
        if (!student) {
            throw new common_1.NotFoundException('Student not found');
        }
        return {
            success: true,
            student,
        };
    }
    async remove(id) {
        const student = await this.prisma.student.findUnique({
            where: { id },
        });
        if (!student) {
            throw new common_1.NotFoundException('Student not found');
        }
        await this.prisma.student.delete({
            where: { id },
        });
        return {
            success: true,
            message: 'Student deleted successfully',
            deletedStudent: {
                id: student.id,
                firstName: student.firstName,
                lastName: student.lastName,
                username: student.username,
            },
        };
    }
    async update(id, updateStudentDto) {
        const student = await this.prisma.student.findUnique({
            where: { id },
        });
        if (!student) {
            throw new common_1.NotFoundException('Student not found');
        }
        const updateData = { ...updateStudentDto };
        if (updateStudentDto.birthDate) {
            updateData.birthDate = new Date(updateStudentDto.birthDate);
        }
        const updatedStudent = await this.prisma.student.update({
            where: { id },
            data: updateData,
            select: {
                id: true,
                firstName: true,
                lastName: true,
                username: true,
                phone: true,
                address: true,
                birthDate: true,
                status: true,
                enrollmentDate: true,
            },
        });
        return {
            success: true,
            message: 'Student updated successfully',
            student: updatedStudent,
        };
    }
};
exports.StudentsService = StudentsService;
exports.StudentsService = StudentsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], StudentsService);
//# sourceMappingURL=students.service.js.map