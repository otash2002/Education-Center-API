import { PrismaService } from '../prisma/prisma.service';
import { CreatePaymentDto, UpdatePaymentDto } from './dto';
export declare class PaymentsService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(createPaymentDto: CreatePaymentDto, staffId: number): Promise<{
        success: boolean;
        message: string;
        payment: {
            student: {
                username: string | null;
                password: string | null;
                firstName: string;
                lastName: string;
                phone: string | null;
                address: string | null;
                birthDate: Date | null;
                id: number;
                status: import(".prisma/client").$Enums.Status;
                createdAt: Date;
                updatedAt: Date;
                enrollmentDate: Date;
            };
            group: {
                schedule: string | null;
                id: number;
                status: import(".prisma/client").$Enums.Status;
                createdAt: Date;
                updatedAt: Date;
                name: string;
                courseId: number;
                teacherId: number;
                startDate: Date;
                endDate: Date | null;
                maxStudents: number;
            };
        } & {
            description: string | null;
            id: number;
            createdAt: Date;
            updatedAt: Date;
            groupId: number;
            createdBy: number;
            studentId: number;
            amount: number;
            paymentDate: Date;
            paymentMethod: import(".prisma/client").$Enums.PaymentMethod;
            receiptNumber: string | null;
        };
    }>;
    findAll(): Promise<{
        success: boolean;
        count: number;
        payments: ({
            student: {
                username: string | null;
                password: string | null;
                firstName: string;
                lastName: string;
                phone: string | null;
                address: string | null;
                birthDate: Date | null;
                id: number;
                status: import(".prisma/client").$Enums.Status;
                createdAt: Date;
                updatedAt: Date;
                enrollmentDate: Date;
            };
            group: {
                schedule: string | null;
                id: number;
                status: import(".prisma/client").$Enums.Status;
                createdAt: Date;
                updatedAt: Date;
                name: string;
                courseId: number;
                teacherId: number;
                startDate: Date;
                endDate: Date | null;
                maxStudents: number;
            };
        } & {
            description: string | null;
            id: number;
            createdAt: Date;
            updatedAt: Date;
            groupId: number;
            createdBy: number;
            studentId: number;
            amount: number;
            paymentDate: Date;
            paymentMethod: import(".prisma/client").$Enums.PaymentMethod;
            receiptNumber: string | null;
        })[];
    }>;
    findOne(id: number): Promise<{
        success: boolean;
        payment: {
            student: {
                username: string | null;
                password: string | null;
                firstName: string;
                lastName: string;
                phone: string | null;
                address: string | null;
                birthDate: Date | null;
                id: number;
                status: import(".prisma/client").$Enums.Status;
                createdAt: Date;
                updatedAt: Date;
                enrollmentDate: Date;
            };
            group: {
                schedule: string | null;
                id: number;
                status: import(".prisma/client").$Enums.Status;
                createdAt: Date;
                updatedAt: Date;
                name: string;
                courseId: number;
                teacherId: number;
                startDate: Date;
                endDate: Date | null;
                maxStudents: number;
            };
        } & {
            description: string | null;
            id: number;
            createdAt: Date;
            updatedAt: Date;
            groupId: number;
            createdBy: number;
            studentId: number;
            amount: number;
            paymentDate: Date;
            paymentMethod: import(".prisma/client").$Enums.PaymentMethod;
            receiptNumber: string | null;
        };
    }>;
    update(id: number, updatePaymentDto: UpdatePaymentDto): Promise<{
        success: boolean;
        message: string;
        payment: {
            student: {
                username: string | null;
                password: string | null;
                firstName: string;
                lastName: string;
                phone: string | null;
                address: string | null;
                birthDate: Date | null;
                id: number;
                status: import(".prisma/client").$Enums.Status;
                createdAt: Date;
                updatedAt: Date;
                enrollmentDate: Date;
            };
            group: {
                schedule: string | null;
                id: number;
                status: import(".prisma/client").$Enums.Status;
                createdAt: Date;
                updatedAt: Date;
                name: string;
                courseId: number;
                teacherId: number;
                startDate: Date;
                endDate: Date | null;
                maxStudents: number;
            };
        } & {
            description: string | null;
            id: number;
            createdAt: Date;
            updatedAt: Date;
            groupId: number;
            createdBy: number;
            studentId: number;
            amount: number;
            paymentDate: Date;
            paymentMethod: import(".prisma/client").$Enums.PaymentMethod;
            receiptNumber: string | null;
        };
    }>;
    remove(id: number): Promise<{
        success: boolean;
        message: string;
        deletedPayment: {
            id: number;
            amount: number;
        };
    }>;
}
