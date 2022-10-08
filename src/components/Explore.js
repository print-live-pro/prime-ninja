import React, { useState } from "react"
import Cards from "../utils/Cards"
import { products, productTabs } from "../utils/consts"

const Explore = () => {
  const [activeTab, setActiveTab] = useState("Printer1")
  return (
    <div className="py-10 bg-neutral-100">
      <h1 className="text-4xl font-bold text-center">Start exploring.</h1>
      <div className="nc-Nav mb-12 mt-6 lg:mb-14 relative flex justify-center w-full text-sm md:text-base">
        <ul className="flex p-1 m-4  bg-white rounded-full shadow-lg overflow-x-auto hiddenScrollbar">
          {productTabs.map((item) => {
            const { title } = item
            return (
              <li
                key={title}
                className="nc-NavItem2 relative px-4 py-1"
                data-nc-id="NavItem2"
              >
                <button
                  onClick={() => setActiveTab(title)}
                  className={
                    activeTab === title
                      ? "bg-slate-900 block font-medium whitespace-nowrap px-3.5 py-2 text-sm sm:px-7 sm:py-3 capitalize rounded-full text-slate-50 focus:outline-none"
                      : "block font-medium whitespace-nowrap px-3.5 py-2 text-sm sm:px-7 sm:py-3 capitalize rounded-full text-slate-600 focus:outline-none"
                  }
                >
                  <div className="flex items-center justify-center space-x-1.5 sm:space-x-2.5 text-xs sm:text-sm ">
                    {title}
                  </div>
                </button>
              </li>
            )
          })}
        </ul>
      </div>
      <div className="grid gap-4 grid-cols-3">
        {products.map((item) => {
          return <Cards key={item.title} {...item} />
        })}
      </div>
      <div className="text-right my-10 mx-4">
        <button
          type="button"
          className="nc-Button relative inline-flex items-center justify-center rounded-full transition-colors text-sm sm:text-base font-medium py-1 px-4 sm:py-1.5 sm:px-6  ttnc-ButtonPrimary disabled:bg-opacity-90 bg-slate-900 hover:bg-slate-800 text-slate-50 shadow-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-6000"
        >
          Discover more
        </button>
      </div>
    </div>
  )
}

export default Explore
