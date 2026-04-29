import { BaseQueryFn, FetchArgs, FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { baseQuery } from "./base-query";
import { RootState } from "../../store";
import { setClearCredentials, setCredentials } from "../../../features/authentication/authentication.features.slice";
import { UserCredential } from "../../../interface/authentication/authentication.interface";

export const baseQueryWithReauth: BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError> = async (args, api, extraOptions) => {

    const state = api.getState() as RootState;
    const refreshTokenValue = state.authentication.userCredentials?.refreshToken;
    let result = await baseQuery(args, api, extraOptions);
    
    if (result?.error?.status === 401 || result?.error?.status === "PARSING_ERROR") {
        if(refreshTokenValue) {
            const refreshResult = await baseQuery(
                {
                    url: '/api/user/refresh-token',
                    method: 'POST',
                },
                api,
                extraOptions
            );
            if(refreshResult?.data) {
                const { accessToken, user } = refreshResult?.data as UserCredential;
                api.dispatch(setCredentials({ status: true, accessToken, refreshToken: "", user }));
                result = await baseQuery(args, api, extraOptions);
            } else {
                api.dispatch(setClearCredentials());
            }
        } else {
            api.dispatch(setClearCredentials());
        }
    }
    return result;
}