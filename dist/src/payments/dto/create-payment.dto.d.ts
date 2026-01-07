export declare class CreatePaymentDto {
    studentId: number;
    groupId: number;
    amount: number;
    paymentDate: string;
    paymentMethod: 'cash' | 'card' | 'transfer';
    description?: string;
    receiptNumber?: string;
}
