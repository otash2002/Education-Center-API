import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreatePaymentDto, UpdatePaymentDto } from './dto';

@Injectable()
export class PaymentsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createPaymentDto: CreatePaymentDto, staffId: number) {
    const payment = await this.prisma.payment.create({
      data: {
        studentId: createPaymentDto.studentId,
        groupId: createPaymentDto.groupId,
        amount: createPaymentDto.amount,
        paymentDate: new Date(createPaymentDto.paymentDate),
        paymentMethod: createPaymentDto.paymentMethod.toUpperCase() as any,
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

  async findOne(id: number) {
    const payment = await this.prisma.payment.findUnique({
      where: { id },
      include: { student: true, group: true },
    });

    if (!payment) {
      throw new NotFoundException('Payment not found');
    }

    return {
      success: true,
      payment,
    };
  }

  async update(id: number, updatePaymentDto: UpdatePaymentDto) {
    const payment = await this.prisma.payment.findUnique({
      where: { id },
    });

    if (!payment) {
      throw new NotFoundException('Payment not found');
    }

    const updateData: any = { ...updatePaymentDto };
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

  async remove(id: number) {
    const payment = await this.prisma.payment.findUnique({
      where: { id },
    });

    if (!payment) {
      throw new NotFoundException('Payment not found');
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
}
