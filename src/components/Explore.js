import { useRouter } from "next/router"
import React, { createContext, useState } from "react"
import { connect } from "react-redux"
import { ADD_TO_CART } from "../redux/cart/actionTypes"
import Cards from "../utils/Cards"
import {
  printer1Products,
  printer2Products,
  printer3Products,
  printer4Products,
  printer5Products,
  productTabs
} from "../utils/consts"

export const CartContext = createContext()

const Explore = ({ addToCart }) => {
  const [activeTab, setActiveTab] = useState("printer1")
  const [activeList, setActiveList] = useState(printer1Products)

  const router = useRouter()

  const productsMap = {
    "Home Printer": printer1Products,
    "Office Printer": printer2Products,
    "Wireless Printer": printer3Products,
    "Bussiness Printer": printer4Products,
    "Laser Printer": printer5Products
  }

  const activeItemHandler = (title) => {
    setActiveTab(title)
    setActiveList(productsMap[title])
  }

  const routeToPrinters = () => {
    router.push(
      {
        pathname: "/printers",
        query: { data: JSON.stringify(activeList) },
      },
      "/printers"
    )
  }

  return (
    <div className="py-10 bg-white">
      <h1 className="text-4xl font-bold text-center">Start exploring.</h1>
      <div className="nc-Nav mb-12 mt-6 lg:mb-14 relative flex justify-center w-full text-sm md:text-base">
        <ul className="flex p-1 m-4 bg-slate-50 rounded-full shadow-lg overflow-x-auto hiddenScrollbar">
          {productTabs.map((item) => {
            const { title, id } = item
            return (
              <li
                key={id}
                className="nc-NavItem2 relative px-2 py-1"
                data-nc-id="NavItem2"
              >
                <button
                  onClick={() => activeItemHandler(title)}
                  className={`${
                    activeTab === title
                      ? "bg-slate-900 text-white"
                      : "text-slate-600"
                  } font-medium whitespace-nowrap px-3.5 py-2 text-sm sm:px-7 sm:py-3 capitalize rounded-full focus:outline-none
                  `}
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
      <div className="mx-4 grid gap-6 grid-cols-3 md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1 lg:grid-cols-3">
        {activeList?.map((item) => {
          const { id } = item
          return (
            <Cards
              key={id}
              {...item}
              addToCartHandler={() => addToCart(item)}
            />
          )
        })}
      </div>
      <div className="text-center my-10 mx-4">
        <button
          type="button"
          className="nc-Button relative inline-flex items-center justify-center rounded-full transition-colors text-sm sm:text-base font-medium py-1 px-4 sm:py-1.5 sm:px-6  ttnc-ButtonPrimary disabled:bg-opacity-90 bg-slate-900 hover:bg-slate-800 text-slate-50 shadow-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-6000"
          onClick={() => routeToPrinters()}
        >
          Show me more
        </button>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (item) => dispatch({ type: ADD_TO_CART, payload: { item } }),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Explore)
