import { CreateAccountBody, LoginBody } from "./authentication-body";
import { UserCredential } from "./authentication.interface";

export interface AuthenticationState {
    userCredentials: UserCredential | null;
    pendingEmail: string | null;
    justLoggedOut: boolean; 
    loginBody: LoginBody,
    createAccountBody: CreateAccountBody,
    resetPasswordBody: string;
}