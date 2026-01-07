export declare class UpdatePaymentDto {
    amount?: number;
    paymentDate?: string;
    paymentMethod?: 'cash' | 'card' | 'transfer';
    description?: string;
    receiptNumber?: string;
}
