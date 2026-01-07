export declare class PaymentResponseDto {
    id: string;
    student: {
        id: string;
        firstName: string;
        lastName: string;
    };
    group: {
        id: string;
        name: string;
    };
    amount: number;
    paymentDate: string;
    paymentMethod: string;
    description?: string;
    receiptNumber?: string;
    createdAt?: string;
    updatedAt?: string;
}
