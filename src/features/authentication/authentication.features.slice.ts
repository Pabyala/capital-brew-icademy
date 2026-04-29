import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AuthenticationState } from "../../interface/authentication/authentication-state";
import { LoginCredentials, UserCredential } from "../../interface/authentication/authentication.interface";
import { RootState } from "../../app/store";
import { CreateAccountBody } from "../../interface/authentication/authentication-body";

const initialState: AuthenticationState = {
    userCredentials: null,
    pendingEmail: null,
    justLoggedOut: false, 
    loginBody: { email: '', password: '' },
    createAccountBody: { email: '', password: '', confirmPassword: '' },
    resetPasswordBody: ''
};

const authenticationSlice = createSlice({
    name: 'authentication',
    initialState,
    reducers: {
        setCredentials: (state, action: PayloadAction<UserCredential>) => {
            state.userCredentials = action.payload;
            state.justLoggedOut = false;
        },
        setClearCredentials: (state) => {
            state.userCredentials = null;
            state.justLoggedOut = true;
        },
        setLoginCredential: ( state, action: PayloadAction<Partial<LoginCredentials>>) => {
            state.loginBody = {
                ...state.loginBody,
                ...action.payload
            };
        },
        clearLoginCredential: (state) => {
            state.loginBody = { email: '', password: '' }; 
        },

        setCreateAccountCredential: ( state, action: PayloadAction<Partial<CreateAccountBody>>) => {
            state.createAccountBody = {
                ...state.createAccountBody,
                ...action.payload
            };
        },
        clearCreateAccountCredential: (state) => {
            state.createAccountBody = { email: '', password: '', confirmPassword: '' }; 
        },

        setResetPasswordBody: (state, action: PayloadAction<string>) => {
            state.resetPasswordBody = action.payload;
        },
        resetResetPasswordBody: (state) => {
            state.resetPasswordBody = '';
        },

        resetLogoutFlag: (state) => {
            state.justLoggedOut = false;
        },
        clearAuthenticationSlice: () => initialState,
    },
});

export const {
    // userCredentials
    setCredentials,
    setClearCredentials,

    // loginCredential
    setLoginCredential,
    clearLoginCredential,

    // createAccountBody
    setCreateAccountCredential,
    clearCreateAccountCredential,

    // resetPasswordBody
    setResetPasswordBody,
    resetResetPasswordBody,

    // justLoggedOut
    resetLogoutFlag,
    
    clearAuthenticationSlice
} = authenticationSlice.actions;

export default authenticationSlice.reducer

export const selectLoginBody = (state: RootState) => state.authentication.loginBody;
export const selectCreateAccountBody = (state: RootState) => state.authentication.createAccountBody;
export const selectResetPasswordBody = (state: RootState) => state.authentication.resetPasswordBody;