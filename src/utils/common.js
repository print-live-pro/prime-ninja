import { toast } from "react-toastify"

export const showToast = (msg, type = "success") => {
  if (type === "err") {
    toast.error(msg, {
      position: toast.POSITION.BOTTOM_LEFT,
    })
  } else {
    toast.success(msg, {
      position: toast.POSITION.BOTTOM_LEFT,
    })
  }
}
