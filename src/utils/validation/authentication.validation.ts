import { CreateAccountBody, LoginBody } from "../../interface/authentication/authentication-body";

export function validateLogin(data: LoginBody): string | null {
    if (!data.email && !data.password) {
        return "Email and password are required";
    }

    if (!data.email) {
        return "Email is required";
    }

    if (!data.password) {
        return "Password is required";
    }

    return null;
}

export function validateCreateAccount(data: CreateAccountBody): string | null {

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/;

    if (!data.email && !data.password && !data.confirmPassword && !data.firstName && !data.lastName) {
        return "All fields are required";
    }

    if (!data.firstName) {
        return "First name is required";
    }

    if (!data.lastName) {
        return "Last name is required";
    }

    if (!data.email) {
        return "Email is required";
    }

    if (!data.password) {
        return "Password is required";
    }

    if (!passwordRegex.test(data.password)) {
        return "Password must contain at least 6 characters, including uppercase, lowercase, and a number";
    }


    if (data.password.length < 6) {
        return "Password must be at least 6 characters";
    }

    if (!data.confirmPassword) {
        return "Confirm password is required";
    }

    if (data.password !== data.confirmPassword) {
        return "Password and confirm password do not match";
    }

    return null;
}