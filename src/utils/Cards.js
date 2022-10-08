/* eslint-disable @next/next/no-img-element */
import React from "react"

const Cards = ({ title, imgSrc, desc }) => {
  return (
    <>
      <div className="flex justify-center">
        <div className="rounded-lg shadow-lg bg-white max-w-sm">
          <a href="#!" className="h-10">
            <img className="rounded-t-lg h-50" src={imgSrc.src} alt="" />
          </a>
          <div className="p-6">
            <h5 className="text-gray-900 text-xl font-medium mb-2">{title}</h5>
            <p className="text-gray-700 text-base mb-4">{desc} </p>
            <button
              type="button"
              className="nc-Button relative inline-flex items-center justify-center rounded-full transition-colors text-sm sm:text-base font-medium py-1 px-4 sm:py-1.5 sm:px-6  ttnc-ButtonPrimary disabled:bg-opacity-90 bg-slate-900 hover:bg-slate-800 text-slate-50 shadow-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-6000"
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Cards
