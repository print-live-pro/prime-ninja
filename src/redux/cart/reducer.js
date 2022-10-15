import { printer1Products } from "../../utils/consts"
import { ADD_TO_CART, REMOVE_FROM_CART } from "./actionTypes"

const initialState = {
  products: printer1Products,
  cart: [],
}

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const { payload } = action
      const item = state.products.find((product) => product.id === payload.id)
      const inCart = state.cart.find((product) =>
        product.id === payload.id ? true : false
      )
      return {
        ...state,
        cart: inCart
          ? state.cart.map((product) =>
              product.id === payload.id
                ? { ...product, qty: product.qty + 1 }
                : product
            )
          : [...state.cart, { ...item, qty: 1 }],
      }
    case REMOVE_FROM_CART: {
      const { payload } = action
      console.log({ payload })
      return {
        ...state,
        // cart: state.cart.map((product) => {
        //   return product.id === payload.id && product.qty !== 1
        //     ? { ...product, qty: product.qty - 1 }
        //     : state.cart.filter((product) => product.id !== payload.id)
        // }),
        cart: state.cart.filter((product) => product.id !== payload.id),
      }
    }
  }
  return state
}

export default cartReducer
