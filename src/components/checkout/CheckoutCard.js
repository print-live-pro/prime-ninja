import { useRouter } from "next/router"
import React from "react"
import { RiArrowLeftSLine } from "react-icons/ri"
import { connect } from "react-redux"
import CartItems from "../../utils/CartItems"
import CartSubTotal from "../../utils/CartSubTotal"

const CheckoutCard = ({ cart }) => {
  const router = useRouter()

  const routeToBack = () => {
    router.push("/home")
  }

  const onPress = () => {
    
  }

  return (
    <div className="m-8">
      <div className="flex items-center">
        <button onClick={routeToBack}>
          <RiArrowLeftSLine size={30} />
        </button>
        <h1 className="block text-2xl sm:text-3xl lg:text-4xl font-semibold ">
          Checkout
        </h1>
      </div>
      <div className="flex flex-col lg:flex-row my-5">
        <div className="flex-1">
          <h3 className="text-slate-700 flex mb-5">Shipping Address</h3>
          <div className="border border-slate-200 rounded-xl px-6 py-7 space-y-4 sm:space-y-6 block">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-3">
              <div>
                <label
                  className="nc-Label text-base font-medium text-neutral-900"
                  data-nc-id="Label"
                >
                  First name
                </label>
                <input
                  type="text"
                  className="flex w-full border border-neutral-200 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 bg-white disabled:bg-neutral-200 rounded-lg text-sm font-normal h-11 px-4 py-3 mt-1.5"
                  value=""
                  placeholder="Cole"
                />
              </div>
              <div>
                <label
                  className="nc-Label text-base font-medium text-neutral-900"
                  data-nc-id="Label"
                >
                  Last name
                </label>
                <input
                  type="text"
                  className="block w-full border border-neutral-200 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 bg-white disabled:bg-neutral-200 rounded-lg text-sm font-normal h-11 px-4 py-3 mt-1.5"
                  value=""
                  placeholder="Enrico"
                />
              </div>
              <div class="flex-1">
                <label
                  class="nc-Label text-base font-medium text-neutral-900"
                  data-nc-id="Label"
                >
                  Address
                </label>
                <input
                  type="text"
                  class="block w-full border border-neutral-200 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 bg-white disabled:bg-neutral-200 rounded-lg text-sm font-normal h-11 px-4 py-3 mt-1.5"
                  placeholder="123, Dream Avenue, USA"
                  value=""
                />
              </div>
              <div class="flex-1">
                <label
                  class="nc-Label text-base font-medium text-neutral-900"
                  data-nc-id="Label"
                >
                  Postal Code
                </label>
                <input
                  type="number"
                  class="block w-full border border-neutral-200 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 bg-white disabled:bg-neutral-200 rounded-lg text-sm font-normal h-11 px-4 py-3 mt-1.5"
                  placeholder="2500"
                  value=""
                />
              </div>
              <div class="flex-1">
                <label
                  class="nc-Label text-base font-medium text-neutral-900"
                  data-nc-id="Label"
                >
                  City
                </label>
                <input
                  type="text"
                  class="block w-full border border-neutral-200 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 bg-white disabled:bg-neutral-200 rounded-lg text-sm font-normal h-11 px-4 py-3 mt-1.5"
                  placeholder="Texas"
                  value=""
                />
              </div>
              <div class="flex-1">
                <label
                  class="nc-Label text-base font-medium text-neutral-900"
                  data-nc-id="Label"
                >
                  Country
                </label>
                <input
                  type="number"
                  class="block w-full border border-neutral-200 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 bg-white disabled:bg-neutral-200 rounded-lg text-sm font-normal h-11 px-4 py-3 mt-1.5"
                  placeholder="USA"
                  value=""
                />
              </div>
            </div>
            <button className="nc-Button relative h-auto inline-flex items-center justify-center rounded-full transition-colors text-sm sm:text-base font-medium py-3 px-4 sm:py-3.5 sm:px-6  ttnc-ButtonPrimary disabled:bg-opacity-90 bg-slate-900  hover:bg-slate-800 text-slate-50  shadow-xl sm:!px-7 shadow-none focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-6000">
              Save and next to Payment
            </button>
          </div>
        </div>
        <div class="flex-shrink-0 border-t lg:border-t-0 lg:border-l border-slate-200 my-10 lg:my-0 lg:mx-10 xl:lg:mx-14 2xl:mx-16 "></div>
        <div className="w-full lg:w-[36%]">
          <h3 className="text-slate-700 flex mb-5">Order Summary</h3>
          <div className="border border-slate-200 rounded-xl space-y-4 sm:space-y-6 block">
            <CartItems cartItems={cart} />
            <CartSubTotal
              subTotal={10}
              onPress={onPress}
              btnText="Confirm order"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
  }
}

export default connect(mapStateToProps, null)(CheckoutCard)
