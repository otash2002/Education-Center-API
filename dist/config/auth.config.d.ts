declare const _default: (() => {
    bcryptRounds: number;
    passwordMinLength: number;
    maxLoginAttempts: number;
    lockoutDuration: number;
}) & import("@nestjs/config").ConfigFactoryKeyHost<{
    bcryptRounds: number;
    passwordMinLength: number;
    maxLoginAttempts: number;
    lockoutDuration: number;
}>;
export default _default;
