import { ModalConfirm, ModalShow, ModalSubShow, ModalUpdate } from "../types/type";

export interface Modals {
    modalUpdate: ModalUpdate | null;
    modalShow: ModalShow | null;
    modalSubShow: ModalSubShow | null;
    modalConfirm:  ModalConfirm | null;
    modalId: number | null;
    modalSubId: number | null;
}