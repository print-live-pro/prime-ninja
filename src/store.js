import { configureStore } from "@reduxjs/toolkit"
import cartReducer from "./redux/cart/reducer"

const store = configureStore({
  reducer: cartReducer,
})

export default store
