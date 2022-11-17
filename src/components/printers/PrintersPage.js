import React, { useEffect, useState } from "react"
import { connect } from "react-redux"
import { useRouter } from "next/router"
import { RiArrowLeftSLine } from "react-icons/ri"
import { ADD_TO_CART } from "../../redux/cart/actionTypes"
import Cards from "../../utils/Cards"

const PrintersPage = ({ addToCart }) => {
  const router = useRouter()
  const [productList, setProductList] = useState([])
  const {
    query: { data },
  } = router

  useEffect(() => {
    if (router.isReady) {
      setProductList(JSON.parse(data))
    }
  }, [router.query, data, router.isReady])

  const routeToBack = () => {
    router.back()
  }
  return (
    <div className="bg-gray-100 p-5 h-100vh">
      <div className="flex items-center m-5 mt-0">
        <button onClick={routeToBack}>
          <RiArrowLeftSLine size={30} />
        </button>
        <h1 className="text-2xl font-semibold ml-2">Printers</h1>
      </div>
      <div className="mx-4 grid gap-6 grid-cols-3 md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1 lg:grid-cols-3">
        {productList.map((item) => {
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

export default connect(mapStateToProps, mapDispatchToProps)(PrintersPage)
