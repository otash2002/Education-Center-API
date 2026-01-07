import { Strategy } from 'passport-jwt';
import { ConfigService } from '@nestjs/config';
import { PrismaService } from '../../prisma/prisma.service';
declare const JwtStrategy_base: new (...args: [opt: import("passport-jwt").StrategyOptionsWithRequest] | [opt: import("passport-jwt").StrategyOptionsWithoutRequest]) => Strategy & {
    validate(...args: any[]): unknown;
};
export declare class JwtStrategy extends JwtStrategy_base {
    private readonly configService;
    private readonly prisma;
    constructor(configService: ConfigService, prisma: PrismaService);
    validate(payload: any): Promise<{
        userId: any;
        username: any;
        role: any;
        type: string;
        staff: {
            username: string;
            password: string;
            firstName: string;
            lastName: string;
            role: import(".prisma/client").$Enums.Role;
            position: string;
            phone: string | null;
            address: string | null;
            id: number;
            hireDate: Date;
            status: import(".prisma/client").$Enums.Status;
            createdAt: Date;
            updatedAt: Date;
        } | null;
        student?: undefined;
    } | {
        userId: any;
        username: any;
        role: string;
        type: string;
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
        } | null;
        staff?: undefined;
    } | null>;
}
export {};
