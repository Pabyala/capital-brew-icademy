import { UserData } from "../user/user.interface";

export interface LoginResponse {
    status: boolean;
    message: string;
    mustChangePassword: boolean;
}

export interface RefreshTokenResponse {
    status: boolean;
    accessToken: string;
    refreshToken: string;
    user: UserData
}