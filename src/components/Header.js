/* eslint-disable @next/next/no-img-element */
import Image from "next/image"
import React, { Fragment, useState } from "react"
import { Menu, Transition } from "@headlessui/react"
import {
  RiAccountCircleLine,
  RiFileList3Line,
  RiLogoutCircleLine,
  RiLoginCircleLine,
  RiBook2Line,
} from "react-icons/ri"
import {
  CartIcon,
  Logo,
  Printer1,
  Profile,
  ProfileIcon,
} from "../../public/assets"
import LoginForm from "../utils/LoginForm"
import RegisterForm from "../utils/RegisterForm"
import Modal from "../utils/Modal"

const Header = () => {
  const [isLogin, setIsLogin] = useState(false)
  const [openLogin, setOpenLogin] = useState(false)
  const [openRegister, setOpenRegister] = useState(false)
  return (
    <>
      <div className="flex justify-between p-5 items-center">
        <Image src={Logo} alt="company-logo" className="w-3 h-3" />
        <div className="flex">
          {isLogin ? (
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
                            <h1 className="text-md">Eden Smith</h1>
                            <p className="text-sm">Los Angeles, LA</p>
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
                        <button className="flex items-center text-sm hover:bg-neutral-100 w-full p-2 transition duration-150 ease-in-out rounded-lg">
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
                  <div className="p-3">
                    <h3 className="text-xl font-semibold">Shopping cart</h3>
                    <Menu.Item>
                      <div className="max-h-[60vh] overflow-y-auto hiddenScrollbar">
                        <div className="divide-y divide-slate-100">
                          <div className="flex justify-between py-5 last:pb-0">
                            <div className="relative h-20 w-20 items-center flex overflow-hidden rounded-xl bg-slate-100">
                              <Image src={Printer1} alt="Rey Nylon Backpack" />
                            </div>
                            <div className="ml-4 flex flex-1 flex-col">
                              <div>
                                <div className="flex justify-between ">
                                  <div>
                                    <h3 className="text-base font-medium ">
                                      <a href="/ciseco/product-detail">
                                        HP Printer
                                      </a>
                                    </h3>
                                  </div>
                                  <div className="mt-0.5">
                                    <div className="flex items-center border-2 border-green-500 rounded-lg py-1 px-2 md:py-1.5 md:px-2.5 text-sm font-medium">
                                      <span className="text-green-500 !leading-none">
                                        $74.00
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="flex flex-1 items-end justify-between text-sm">
                                <p className="text-gray-500">Qty 1</p>
                                <div className="flex">
                                  <button
                                    type="button"
                                    className="font-medium text-primary-6000"
                                  >
                                    Remove
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Menu.Item>
                  </div>
                  <div className="py-3">
                    <div class="bg-neutral-50 p-5 pb-0">
                      <p class="flex justify-between font-semibold text-slate-900 ">
                        <span>
                          <span>Subtotal</span>
                          <span class="block text-sm text-slate-500  font-normal">
                            Shipping and taxes calculated at checkout.
                          </span>
                        </span>
                        <span class="">$299.00</span>
                      </p>
                      <div class="text-right space-x-2 mt-5 pb-4">
                        <a
                          class="nc-Button relative h-auto inline-flex items-center justify-center rounded-full transition-colors text-sm sm:text-base font-medium py-2 px-4 sm:py-2 sm:px-6  ttnc-ButtonPrimary disabled:bg-opacity-90 bg-slate-900 hover:bg-slate-800 text-slate-50 shadow-xl flex-1 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-6000 "
                          rel="noopener noreferrer"
                          href="/ciseco/checkout"
                        >
                          Check out
                        </a>
                      </div>
                    </div>
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

export default Header
