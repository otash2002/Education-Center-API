import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { ConfigService } from '@nestjs/config';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    private readonly configService: ConfigService,
    private readonly prisma: PrismaService,
  ) {
    const secret = configService.get<string>('jwt.secret') || 'your-secret-key';
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: secret,
    });
  }

  async validate(payload: any) {
    if (payload.type === 'staff') {
      const staff = await this.prisma.staff.findUnique({
        where: { id: payload.sub },
      });
      return { userId: payload.sub, username: payload.username, role: payload.role, type: 'staff', staff };
    } else if (payload.type === 'student') {
      const student = await this.prisma.student.findUnique({
        where: { id: payload.sub },
      });
      return { userId: payload.sub, username: payload.username, role: 'STUDENT', type: 'student', student };
    }
    return null;
  }
}
