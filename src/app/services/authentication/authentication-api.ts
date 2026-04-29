import { setCredentials } from "../../../features/authentication/authentication.features.slice";
import { LoginBody } from "../../../interface/authentication/authentication-body";
import { LoginResponse, RefreshTokenResponse } from "../../../interface/authentication/authentication-response";
import { store } from "../../store";
import { apiSlice } from "../api/api-slice";

export const authenticationApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        login: builder.mutation<LoginResponse, LoginBody>({
            query: (body) => ({
                url: 'api/login',
                method: 'POST',
                body
            })
        }),
        refreshToken: builder.mutation<RefreshTokenResponse, void>({
            query: () => ({
                url: '/api/user/refresh-token',
                method: 'POST',
            }),
            transformResponse: (response: RefreshTokenResponse) => {
                store.dispatch(setCredentials({
                    accessToken: response.accessToken,
                    refreshToken: "",
                    status: response.status,
                    user: response.user
                }));
                return response; 
            },
            invalidatesTags: ["User"], 
        }),
    })
})

export const {
    useLoginMutation,
    useRefreshTokenMutation
} = authenticationApiSlice;