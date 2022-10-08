/* eslint-disable @next/next/no-img-element */
import Image from "next/image"
import React, { Fragment, useEffect, useRef, useState } from "react"
import { Menu, Transition } from "@headlessui/react"
import {
  RiUser3Line,
  RiShoppingCartLine,
  RiUser6Line,
  RiAccountCircleLine,
  RiFileList3Line,
  RiHeart3Line,
  RiLogoutCircleLine,
} from "react-icons/ri"
import { Logo, Profile } from "../../public/assets"

const Header = () => {
  return (
    <div className="flex justify-between p-5 items-center">
      <Image src={Logo} alt="company-logo" className="w-3 h-3" />
      <div className="flex">
        <div className="top-16 w-56 text-right z-50">
          <Menu as="div" className="relative inline-block text-left">
            <div>
              <Menu.Button className="px-3 hover:bg-gray-100 rounded-full py-3">
                <RiUser3Line size={30} />
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
                <div className="px-1 py-4">
                  <Menu.Item>
                    <button className="flex items-center">
                      <RiAccountCircleLine size={20} className="mr-2" />
                      My Account
                    </button>
                  </Menu.Item>
                  <Menu.Item>
                    <button className="flex items-center my-2 py-2">
                      <RiFileList3Line size={20} className="mr-2" />
                      My Order
                    </button>
                  </Menu.Item>
                  <Menu.Item>
                    <button className="flex items-center">
                      <RiHeart3Line size={20} className="mr-2" />
                      Wishlist
                    </button>
                  </Menu.Item>
                </div>
                <div className="px-1 py-4">
                  <Menu.Item>
                    <button className="flex items-center">
                      <RiLogoutCircleLine size={20} className="mr-2" />
                      Logout
                    </button>
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
        <button className="px-3 hover:bg-gray-100 rounded-full py-3">
          <RiShoppingCartLine size={30} />
        </button>
      </div>
    </div>
  )
}

export default Header
