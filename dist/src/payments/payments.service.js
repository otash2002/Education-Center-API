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
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let PaymentsService = class PaymentsService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createPaymentDto, staffId) {
        const payment = await this.prisma.payment.create({
            data: {
                studentId: createPaymentDto.studentId,
                groupId: createPaymentDto.groupId,
                amount: createPaymentDto.amount,
                paymentDate: new Date(createPaymentDto.paymentDate),
                paymentMethod: createPaymentDto.paymentMethod.toUpperCase(),
                description: createPaymentDto.description,
                receiptNumber: createPaymentDto.receiptNumber,
                createdBy: staffId,
            },
            include: { student: true, group: true },
        });
        return {
            success: true,
            message: 'Payment created successfully',
            payment,
        };
    }
    async findAll() {
        const payments = await this.prisma.payment.findMany({
            include: { student: true, group: true },
        });
        return {
            success: true,
            count: payments.length,
            payments,
        };
    }
    async findOne(id) {
        const payment = await this.prisma.payment.findUnique({
            where: { id },
            include: { student: true, group: true },
        });
        if (!payment) {
            throw new common_1.NotFoundException('Payment not found');
        }
        return {
            success: true,
            payment,
        };
    }
    async update(id, updatePaymentDto) {
        const payment = await this.prisma.payment.findUnique({
            where: { id },
        });
        if (!payment) {
            throw new common_1.NotFoundException('Payment not found');
        }
        const updateData = { ...updatePaymentDto };
        if (updatePaymentDto.paymentDate) {
            updateData.paymentDate = new Date(updatePaymentDto.paymentDate);
        }
        const updatedPayment = await this.prisma.payment.update({
            where: { id },
            data: updateData,
            include: { student: true, group: true },
        });
        return {
            success: true,
            message: 'Payment updated successfully',
            payment: updatedPayment,
        };
    }
    async remove(id) {
        const payment = await this.prisma.payment.findUnique({
            where: { id },
        });
        if (!payment) {
            throw new common_1.NotFoundException('Payment not found');
        }
        await this.prisma.payment.delete({
            where: { id },
        });
        return {
            success: true,
            message: 'Payment deleted successfully',
            deletedPayment: {
                id: payment.id,
                amount: payment.amount,
            },
        };
    }
};
exports.PaymentsService = PaymentsService;
exports.PaymentsService = PaymentsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], PaymentsService);
//# sourceMappingURL=payments.service.js.map