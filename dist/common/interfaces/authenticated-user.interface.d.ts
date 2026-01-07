export interface AuthenticatedUser {
    id: number;
    username: string;
    role: 'superadmin' | 'admin' | 'teacher' | 'student';
    type: 'staff' | 'student';
}
