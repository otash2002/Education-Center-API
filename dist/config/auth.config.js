"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("@nestjs/config");
exports.default = (0, config_1.registerAs)('auth', () => ({
    bcryptRounds: parseInt(process.env.BCRYPT_ROUNDS ?? '10', 10),
    passwordMinLength: parseInt(process.env.PASSWORD_MIN_LENGTH ?? '8', 10),
    maxLoginAttempts: parseInt(process.env.MAX_LOGIN_ATTEMPTS ?? '5', 10),
    lockoutDuration: parseInt(process.env.LOCKOUT_DURATION ?? '15', 10),
}));
//# sourceMappingURL=auth.config.js.map