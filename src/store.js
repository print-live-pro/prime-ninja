import { combineReducers, configureStore } from "@reduxjs/toolkit"
import cartReducer from "./redux/cart/reducer"

const rootReducer = combineReducers({
  cart: cartReducer,
})
const store = configureStore({
  reducer: rootReducer,
})

export default store
