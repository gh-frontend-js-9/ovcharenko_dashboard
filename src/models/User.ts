export interface User {
    _id: number | string;
    email: string;
    password?: string;
    name: string;
}