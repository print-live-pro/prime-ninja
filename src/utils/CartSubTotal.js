import React from "react"

const CartSubTotal = ({ subTotal, onPress, btnText }) => {
  return (
    <div className="p-5 pb-0">
      <p className="flex justify-between font-semibold text-slate-900 ">
        <span>
          <span>Subtotal</span>
          <span className="block text-sm text-slate-500  font-normal">
            Shipping and taxes calculated at checkout.
          </span>
        </span>
        <span className="">${subTotal}</span>
      </p>
      <div className="text-right space-x-2 mt-5 pb-4">
        <button
          className="relative h-auto inline-flex items-center justify-center rounded-full transition-colors text-sm sm:text-base font-medium py-2 px-4 sm:py-2 sm:px-6  ttnc-ButtonPrimary disabled:bg-opacity-90 bg-slate-900 hover:bg-slate-800 text-slate-50 shadow-xl flex-1 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-6000 "
          onClick={onPress}
        >
          {btnText}
        </button>
      </div>
    </div>
  )
}

export default CartSubTotal
