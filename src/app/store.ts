import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./services/api/api-slice";
import authenticationReducer from '../features/authentication/authentication.features.slice'
import initialStateReducer from '../features/orders/filter-orders.features.slice'
import modalTypeReducer from '../features/modals/modal-type.features.slice'

export const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        authentication: authenticationReducer,
        filterOrderState: initialStateReducer,
        modalTypeState: modalTypeReducer,
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            // serializableCheck: {
            //     ignoredActions: [
            //         "api/executeQuery/fulfilled",
            //         "api/executeQuery/rejected",
            //         "api/executeQuery/pending",
            //         // 'api/executeMutation/fulfilled',
            //         // 'api/executeMutation/rejected',
            //     ],
            // }
            // ignoredPaths: ['api.mutations'],
        }).concat(apiSlice.middleware),
    devTools: true
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch