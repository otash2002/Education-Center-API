import { PaymentsService } from './payments.service';
import { CreatePaymentDto, UpdatePaymentDto } from './dto';
export declare class PaymentsController {
    private readonly paymentsService;
    constructor(paymentsService: PaymentsService);
    create(createPaymentDto: CreatePaymentDto, user: any): Promise<{
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
    findOne(id: string): Promise<{
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
    update(id: string, updatePaymentDto: UpdatePaymentDto): Promise<{
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
    remove(id: string): Promise<{
        success: boolean;
        message: string;
        deletedPayment: {
            id: number;
            amount: number;
        };
    }>;
}
