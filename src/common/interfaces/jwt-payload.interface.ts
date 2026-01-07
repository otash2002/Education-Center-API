export interface JwtPayload {
  sub: number;
  username: string;
  role: 'superadmin' | 'admin' | 'teacher' | 'student';
  type: 'staff' | 'student';
}
