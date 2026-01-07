export declare class CreateCourseDto {
    name: string;
    description?: string;
    price: number;
    duration: number;
    level?: 'beginner' | 'intermediate' | 'advanced';
}
