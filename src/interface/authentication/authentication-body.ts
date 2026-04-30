export interface LoginBody {
    email: string;
    password: string;
}

export interface CreateAccountBody {
    email: string;
    firstName: string;
    lastName: string;
    birthday?: string;
    password: string;
    confirmPassword: string;
}