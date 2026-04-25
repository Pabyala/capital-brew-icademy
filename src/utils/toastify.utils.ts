import { toast, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Toast } from "../types/type";

export const ShowToast = (message: string, toastType: Toast = "info") => {
    if (!message) return;

    toast[toastType](message, {
        position: "top-center",
        autoClose: 500,
        hideProgressBar: true,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Zoom,
    });
};
