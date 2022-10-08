import React from "react"
import Link from "next/link"
import { RiUser3Line, RiShoppingBagLine } from "react-icons/ri"
import { menu } from "../src/utils/consts"

const Header = () => {
  return (
    <div className="flex justify-content">
      <div className="">Prime Ninja</div>
      <div className="">
        {menu.map((item) => {
          const { title, url } = item
          return (
            <Link key={title} href={url} passHref>
              {title}
            </Link>
          )
        })}
      </div>
      <div className="">
        <button>
          <RiUser3Line />
        </button>
        <button>
          <RiShoppingBagLine />
        </button>
      </div>
    </div>
  )
}

export default Header
