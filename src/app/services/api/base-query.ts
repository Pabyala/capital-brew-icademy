// export const baseQuery = fetchBaseQuery({
//     baseUrl: API_BASE_URL,
//     credentials: 'include',
//     prepareHeaders: (headers, { getState }) => {
//         const token = (getState() as RootState).auth.userCredentials?.accessToken
//         if(token) {
//             headers.set("authorization", `Bearer ${token}`)
//         }
//         return headers
//     }
// })

export const capitalize = (text: string) => {
    return text.charAt(0).toUpperCase() + text.slice(1)
}