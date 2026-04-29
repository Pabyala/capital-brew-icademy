export interface LoginBody {
    email: string;
    password: string;
}

export interface CreateAccountBody {
    email: string;
    password: string;
    confirmPassword: string;
}