import { UserData } from "../user/user.interface";

export interface UserCredential {
    status: boolean;
    accessToken: string;
    refreshToken: string;
    user: UserData
}

export interface LoginCredentials {
    email: string;
    password: string;
}
