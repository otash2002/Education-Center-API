export declare class ScheduleResponseDto {
    id: string;
    group: {
        id: string;
        name: string;
    };
    day: string;
    startTime: string;
    endTime: string;
    roomNumber: string;
    createdAt?: string;
    updatedAt?: string;
}
