import { createApi } from '@reduxjs/toolkit/query/react'
import { baseQueryWithReauth } from './auth'

export const apiSlice = createApi({
    baseQuery: baseQueryWithReauth,
    endpoints: builder => ({}),
    tagTypes: ['User', 'Proposal', 'AccountCategory'],
})