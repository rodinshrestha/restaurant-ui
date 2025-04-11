import { toast as reactToast } from "react-toastify";

export const toast = (msg: string, type: "success" | "failed") => {
  if (type === "success") {
    return reactToast.error(msg, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  }

  return reactToast(msg);
};
