import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { Modals } from "../../interface/modals.interface";
import { ModalConfirm, ModalShow, ModalSubShow, ModalUpdate, TypeModal, TypeModalId } from "../../types/type";

const initialState: Modals = {
    modalUpdate: null,
    modalShow: null,
    modalSubShow: null,
    modalConfirm: null,
    modalId: null,
    modalSubId: null
};

const modalTypeSlice = createSlice({
    name: 'modalType',
    initialState,
    reducers: {
        setModalUpdate: (state, action: PayloadAction<ModalUpdate | null>) => {
            state.modalUpdate = action.payload;
        },
        setModalShow: (state, action: PayloadAction<ModalShow | null>) => {
            state.modalShow = action.payload;
        },
        setModalSubShow: (state, action: PayloadAction<ModalSubShow | null>) => {
            state.modalSubShow = action.payload;
        },
        setModalConfirm: (state, action: PayloadAction<ModalConfirm | null>) => {
            state.modalConfirm = action.payload;
        },
        setModalId: (state, action: PayloadAction<number | null>) => {
            state.modalId = action.payload;
        },
        setModalSubId: (state, action: PayloadAction<number | null>) => {
            state.modalSubId = action.payload;
        },
        setClearModal: (state, action: PayloadAction<{ type: TypeModal }>) => {
            const { type } = action.payload;
            if (type === "modalUpdate") {
                state.modalUpdate = null;
            } else if (type === "modalShow") {
                state.modalShow = null;
            } else if (type === "modalConfirm") {
                state.modalConfirm = null;
            } else if (type === "modalSubShow") {
                state.modalSubShow = null;
            }
        },
        setClearModalId: (state, action: PayloadAction<{ type: TypeModalId }>) => {
            const { type } = action.payload;
            if(type === 'modalId') {
                state.modalId = null;
            } else if (type === 'modalSubId') {
                state.modalSubId = null
            }
        },
    },
});

export const {
    setModalUpdate,
    setModalShow,
    setModalSubShow,
    setModalConfirm,
    setModalId,
    setModalSubId,
    setClearModal,
    setClearModalId
} = modalTypeSlice.actions;

export default modalTypeSlice.reducer;

export const selectModalConfirm = (state: RootState) => state.modalTypeState.modalConfirm;
export const selectModalShow = (state: RootState) => state.modalTypeState.modalShow;
export const selectModalSubShow = (state: RootState) => state.modalTypeState.modalSubShow;
export const selectModalUpdate = (state: RootState) => state.modalTypeState.modalUpdate;
export const selectModalId = (state: RootState) => state.modalTypeState.modalId;
export const selectModalSubId = (state: RootState) => state.modalTypeState.modalSubId;