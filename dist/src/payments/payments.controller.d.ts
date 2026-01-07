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
                createdAt: Date;
                updatedAt: Date;
                id: number;
                firstName: string;
                lastName: string;
                username: string | null;
                password: string | null;
                phone: string | null;
                address: string | null;
                birthDate: Date | null;
                status: import(".prisma/client").$Enums.Status;
                enrollmentDate: Date;
            };
            group: {
                createdAt: Date;
                updatedAt: Date;
                id: number;
                name: string;
                status: import(".prisma/client").$Enums.Status;
                courseId: number;
                teacherId: number;
                startDate: Date;
                endDate: Date | null;
                schedule: string | null;
                maxStudents: number;
            };
        } & {
            description: string | null;
            amount: number;
            paymentDate: Date;
            paymentMethod: import(".prisma/client").$Enums.PaymentMethod;
            receiptNumber: string | null;
            createdAt: Date;
            updatedAt: Date;
            id: number;
            studentId: number;
            groupId: number;
            createdBy: number;
        };
    }>;
    findAll(): Promise<{
        success: boolean;
        count: number;
        payments: ({
            student: {
                createdAt: Date;
                updatedAt: Date;
                id: number;
                firstName: string;
                lastName: string;
                username: string | null;
                password: string | null;
                phone: string | null;
                address: string | null;
                birthDate: Date | null;
                status: import(".prisma/client").$Enums.Status;
                enrollmentDate: Date;
            };
            group: {
                createdAt: Date;
                updatedAt: Date;
                id: number;
                name: string;
                status: import(".prisma/client").$Enums.Status;
                courseId: number;
                teacherId: number;
                startDate: Date;
                endDate: Date | null;
                schedule: string | null;
                maxStudents: number;
            };
        } & {
            description: string | null;
            amount: number;
            paymentDate: Date;
            paymentMethod: import(".prisma/client").$Enums.PaymentMethod;
            receiptNumber: string | null;
            createdAt: Date;
            updatedAt: Date;
            id: number;
            studentId: number;
            groupId: number;
            createdBy: number;
        })[];
    }>;
    findOne(id: string): Promise<{
        success: boolean;
        payment: {
            student: {
                createdAt: Date;
                updatedAt: Date;
                id: number;
                firstName: string;
                lastName: string;
                username: string | null;
                password: string | null;
                phone: string | null;
                address: string | null;
                birthDate: Date | null;
                status: import(".prisma/client").$Enums.Status;
                enrollmentDate: Date;
            };
            group: {
                createdAt: Date;
                updatedAt: Date;
                id: number;
                name: string;
                status: import(".prisma/client").$Enums.Status;
                courseId: number;
                teacherId: number;
                startDate: Date;
                endDate: Date | null;
                schedule: string | null;
                maxStudents: number;
            };
        } & {
            description: string | null;
            amount: number;
            paymentDate: Date;
            paymentMethod: import(".prisma/client").$Enums.PaymentMethod;
            receiptNumber: string | null;
            createdAt: Date;
            updatedAt: Date;
            id: number;
            studentId: number;
            groupId: number;
            createdBy: number;
        };
    }>;
    update(id: string, updatePaymentDto: UpdatePaymentDto): Promise<{
        success: boolean;
        message: string;
        payment: {
            student: {
                createdAt: Date;
                updatedAt: Date;
                id: number;
                firstName: string;
                lastName: string;
                username: string | null;
                password: string | null;
                phone: string | null;
                address: string | null;
                birthDate: Date | null;
                status: import(".prisma/client").$Enums.Status;
                enrollmentDate: Date;
            };
            group: {
                createdAt: Date;
                updatedAt: Date;
                id: number;
                name: string;
                status: import(".prisma/client").$Enums.Status;
                courseId: number;
                teacherId: number;
                startDate: Date;
                endDate: Date | null;
                schedule: string | null;
                maxStudents: number;
            };
        } & {
            description: string | null;
            amount: number;
            paymentDate: Date;
            paymentMethod: import(".prisma/client").$Enums.PaymentMethod;
            receiptNumber: string | null;
            createdAt: Date;
            updatedAt: Date;
            id: number;
            studentId: number;
            groupId: number;
            createdBy: number;
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
