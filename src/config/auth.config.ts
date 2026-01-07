import { registerAs } from '@nestjs/config';

export default registerAs('auth', () => ({
  bcryptRounds: parseInt(process.env.BCRYPT_ROUNDS ?? '10', 10),
  passwordMinLength: parseInt(process.env.PASSWORD_MIN_LENGTH ?? '8', 10),
  maxLoginAttempts: parseInt(process.env.MAX_LOGIN_ATTEMPTS ?? '5', 10),
  lockoutDuration: parseInt(process.env.LOCKOUT_DURATION ?? '15', 10), // minutes
}));
