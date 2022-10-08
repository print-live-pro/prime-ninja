/* eslint-disable @next/next/no-img-element */
import React from "react"

const Cards = ({ title, imgSrc, desc, price }) => {
  return (
    <>
      <div className="flex justify-center">
        <div className="max-w-sm">
          <div className="bg-slate-50 rounded-3xl">
            <img
              className="object-cover w-full h-full drop-shadow-xl"
              src={imgSrc.src}
              alt=""
            />
          </div>
          <div className="p-6">
            <h2 className="text-base font-semibold transition-colors">
              {title}
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1 ">
              {desc}
            </p>
            <div className="flex items-center justify-between mt-2">
              <div className="flex items-center border-2 border-green-500 rounded-lg py-1 px-2 md:py-1.5 md:px-2.5 text-sm font-medium">
                <span className="text-green-500 !leading-none">${price}</span>
              </div>
              <button
                type="button"
                className="nc-Button relative inline-flex items-center justify-center rounded-full transition-colors text-sm sm:text-base font-medium py-1 px-4 sm:py-1.5 sm:px-6  ttnc-ButtonPrimary disabled:bg-opacity-90 bg-slate-900 hover:bg-slate-800 text-slate-50 shadow-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-6000"
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Cards
