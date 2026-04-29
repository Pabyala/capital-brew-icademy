import { fetchBaseQuery } from "@reduxjs/toolkit/query"
import { API_BASE_URL } from "../../../utils/env.utils"
import { RootState } from "../../store"

export const baseQuery = fetchBaseQuery({
    baseUrl: API_BASE_URL,
    credentials: 'include',
    prepareHeaders: (headers, { getState }) => {
        const token = (getState() as RootState).authentication.userCredentials?.accessToken
        if(token) {
            headers.set("authorization", `Bearer ${token}`)
        }
        return headers
    }
})