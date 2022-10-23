import { toast } from "react-toastify"

export const showToast = (msg, type = "success") => {
  if (type === "err") {
    toast.error(msg, {
      position: toast.POSITION.BOTTOM_LEFT,
      autoClose: 2500,
    })
  } else if (type === "info") {
    toast.info(msg, {
      position: toast.POSITION.BOTTOM_LEFT,
      autoClose: 2500,
    })
  } else {
    toast.success(msg, {
      position: toast.POSITION.BOTTOM_LEFT,
      autoClose: 2500,
    })
  }
}
