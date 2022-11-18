/* eslint-disable @next/next/no-img-element */
import Image from "next/image"
import React, { Fragment, useEffect, useState } from "react"
import { connect } from "react-redux"
import { Menu, Transition } from "@headlessui/react"
import { onAuthStateChanged, signOut } from "firebase/auth"
import {
  RiAccountCircleLine,
  RiFileList3Line,
  RiLogoutCircleLine,
  RiLoginCircleLine,
  RiBook2Line,
} from "react-icons/ri"
import { CartIcon, Logo, Profile, ProfileIcon } from "../../public/assets"
import LoginForm from "../utils/LoginForm"
import RegisterForm from "../utils/RegisterForm"
import Modal from "../utils/Modal"
import { ADD_TO_CART, REMOVE_FROM_CART } from "../redux/cart/actionTypes"
import { auth } from "../../config/firebase"
import { showToast } from "../utils/common"
import { useRouter } from "next/router"
import CartItems from "../utils/CartItems"
import CartSubTotal from "../utils/CartSubTotal"
import Link from "next/link"

const Header = ({ cart, addToCart, removeToCart }) => {
  const router = useRouter()

  const [subTotal, setSubTotal] = useState(0)
  const [user, setUser] = useState(null)
  const [openLogin, setOpenLogin] = useState(false)
  const [openRegister, setOpenRegister] = useState(false)
  const [cartCount, setCartCount] = useState(0)

  // cart item count effect
  useEffect(() => {
    let count = cart.length
    setCartCount(count)
  }, [cart, cartCount])

  // auth effect
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser({
          uid: user.uid,
          email: user.email,
        })
        setOpenRegister(false)
        setOpenLogin(false)
      } else {
        setUser(null)
      }
    })

    return () => unsubscribe()
  }, [])

  // subtotal effect
  useEffect(() => {
    let total = 0
    if (cartCount !== 0) {
      cart.forEach((item) => {
        const { price, qty } = item
        total += +price.split("$")[1] * qty
      })
      setSubTotal(total)
    }
  }, [cart, setSubTotal, cartCount])

  const logout = async () => {
    setUser(null)
    await signOut(auth)
    showToast("Logout successful!")
  }

  const addCartHandler = (e, item) => {
    e.preventDefault()
    return addToCart(item)
  }

  const removeCartHandler = (e, id) => {
    e.preventDefault()
    return removeToCart(id)
  }

  const onPress = () => {
    if (cartCount === 0) {
      showToast("Please add items to cart.", "info")
    } else {
      router.push("/checkout")
    }
  }

  let username = ""
  let useremail = ""
  if (user !== null) {
    const { email } = user
    username = email.split("@")[0]
    useremail = email
  }
  return (
    <>
      <div className="flex justify-between p-5 items-center">
        <Link href='/' className="cursor-pointer">
        <Image src={Logo} alt="company-logo" width="90px" height="80px" className="cursor-pointer"/>
        
        </Link>
        <div className="flex">
          {user !== null ? (
            <div className="top-16 w-56 text-right z-50">
              <Menu as="div" className="relative inline-block text-left">
                <div>
                  <Menu.Button className="w-10 h-10 sm:w-12 sm:h-12 rounded-full text-slate-700 hover:bg-slate-100 focus:outline-none flex items-center justify-center">
                    <Image src={ProfileIcon} alt="profile-icon" />
                  </Menu.Button>
                </div>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute right-0 p-2 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="px-1 py-4">
                      <Menu.Item>
                        <div className="flex items-center">
                          <img
                            src={Profile.src}
                            alt="profile"
                            className="w-10 object-contain h-10 rounded-full"
                          />
                          <div className="pl-4">
                            <h1 className="text-md">{username}</h1>
                            <p className="text-sm">{useremail}</p>
                          </div>
                        </div>
                      </Menu.Item>
                    </div>
                    <div className="px-1 py-3">
                      <Menu.Item>
                        <button className="flex items-center text-sm hover:bg-neutral-100 w-full p-2 transition duration-150 ease-in-out rounded-lg">
                          <RiAccountCircleLine size={20} className="mr-2" />
                          My Account
                        </button>
                      </Menu.Item>
                      <Menu.Item>
                        <button className="flex items-center text-sm hover:bg-neutral-100 w-full p-2 transition duration-150 ease-in-out rounded-lg">
                          <RiFileList3Line size={20} className="mr-2" />
                          My Order
                        </button>
                      </Menu.Item>
                    </div>
                    <div className="px-1 py-2">
                      <Menu.Item>
                        <button
                          className="flex items-center text-sm hover:bg-neutral-100 w-full p-2 transition duration-150 ease-in-out rounded-lg"
                          onClick={() => logout()}
                        >
                          <RiLogoutCircleLine size={20} className="mr-2" />
                          Logout
                        </button>
                      </Menu.Item>
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>
            </div>
          ) : (
            <div className="top-16 w-56 text-right z-50">
              <Menu as="div" className="relative inline-block text-left">
                <div>
                  <Menu.Button className="w-10 h-10 sm:w-12 sm:h-12 rounded-full text-slate-700 hover:bg-slate-100 focus:outline-none flex items-center justify-center">
                    <Image src={ProfileIcon} alt="profile-icon" />
                  </Menu.Button>
                </div>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute right-0 p-2 mt-2 w-40 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="px-1 py-3">
                      <Menu.Item>
                        <button
                          className="flex items-center text-sm hover:bg-neutral-100 w-full p-2 transition duration-150 ease-in-out rounded-lg hover:bg-neutral-100 w-full p-2 transition duration-150 ease-in-out rounded-lg"
                          onClick={() => setOpenRegister(true)}
                        >
                          <RiBook2Line size={20} className="mr-2" />
                          Register
                        </button>
                      </Menu.Item>
                      <Menu.Item>
                        <button
                          className="flex items-center text-sm hover:bg-neutral-100 w-full p-2 transition duration-150 ease-in-out rounded-lg"
                          onClick={() => setOpenLogin(true)}
                        >
                          <RiLoginCircleLine size={20} className="mr-2" />
                          Login
                        </button>
                      </Menu.Item>
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>
            </div>
          )}
          <div className="top-16 text-right z-50">
            <Menu as="div" className="relative inline-block text-left">
              <div>
                <Menu.Button className="w-10 h-10 sm:w-12 sm:h-12 rounded-full text-slate-700 hover:bg-slate-100 focus:outline-none flex items-center justify-center">
                  <Image src={CartIcon} alt="cart" />
                  <sup>{cartCount}</sup>
                </Menu.Button>
              </div>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="w-screen max-w-xs sm:max-w-md absolute right-0 mt-2 w-3xl origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="p-3 px-1">
                    <h3 className="text-xl font-semibold">Shopping cart</h3>
                    <Menu.Item>
                      <CartItems cartItems={cart} />
                    </Menu.Item>
                  </div>
                  <div className="py-3">
                    <CartSubTotal
                      subTotal={subTotal}
                      onPress={onPress}
                      btnText="Check out"
                    />
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
          </div>
        </div>
      </div>
      <Modal
        showModal={openLogin}
        closeModal={() => setOpenLogin(false)}
        title="Sign in"
      >
        <LoginForm />
      </Modal>
      <Modal
        showModal={openRegister}
        closeModal={() => setOpenRegister(false)}
        title="Sign up"
      >
        <RegisterForm />
      </Modal>
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (item) => dispatch({ type: ADD_TO_CART, payload: { item } }),
    removeToCart: (id) => dispatch({ type: REMOVE_FROM_CART, payload: { id } }),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
