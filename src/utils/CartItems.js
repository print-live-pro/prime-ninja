import Image from "next/image"
import React from "react"

const CartItems = ({ cartItems }) => {
  return (
    <div className="max-h-[60vh] overflow-y-auto hiddenScrollbar">
      <div className="divide-y divide-slate-100 px-4">
        {cartItems.length > 0 &&
          cartItems.map((item) => {
            const { id, title, imgSrc, price, qty } = item
            return (
              <div key={id} className="flex justify-between py-5 last:pb-0">
                <div className="relative h-20 w-20 items-center flex overflow-hidden rounded-xl bg-slate-100">
                  <Image src={imgSrc} alt="Rey Nylon Backpack" />
                </div>
                <div className="ml-4 flex flex-1 flex-col">
                  <div>
                    <div className="flex justify-between ">
                      <div>
                        <h3 className="text-base font-medium ">
                          <a href="/ciseco/product-detail">{title}</a>
                        </h3>
                      </div>
                      <div className="mt-0.5">
                        <div className="flex items-center border-2 border-green-500 rounded-lg py-1 px-2 md:py-1.5 md:px-2.5 text-sm font-medium">
                          <span className="text-green-500 !leading-none">
                            {price * qty}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-1 items-end justify-between text-sm">
                    <p className="text-gray-500 mr-2">Qty {qty}</p>
                    <div className="flex">
                      <button
                        type="button"
                        className="font-medium text-green-600 mr-5"
                        onClick={(e) => addCartHandler(e, item)}
                      >
                        Add more
                      </button>
                      <button
                        type="button"
                        className="font-medium text-red-500"
                        onClick={(e) => removeCartHandler(e, id)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
      </div>
    </div>
  )
}

export default CartItems
