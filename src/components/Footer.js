import Image from "next/image"
import React from "react"
import {
  RiFacebookCircleFill,
  RiTelegramFill,
  RiTwitterFill,
  RiInstagramFill,
} from "react-icons/ri"
import { Logo } from "../../public/assets"

const Footer = () => {
  const currentYear = new Date().getFullYear()
  return (
    <footer
      className="text-center text-white py-4 px-8"
      style={{ backgroundColor: "#1f1f1" }}
    >
      <div className="flex justify-between items-center container pt-5">
        <div>
          <Image src={Logo} alt="company-logo" className="w-3 h-3" />
        </div>
        <div className="flex justify-center mb-5">
          <a href="#!" className="mr-9 text-gray-800">
            <RiFacebookCircleFill size={30} />
          </a>
          <a href="#!" className="mr-9 text-gray-800">
            <RiTelegramFill size={30} />
          </a>
          <a href="#!" className="mr-9 text-gray-800">
            <RiTwitterFill size={30} />
          </a>
          <a href="#!" className="text-gray-800">
            <RiInstagramFill size={30} />
          </a>
        </div>
      </div>

      <div className="font-semibold text-center text-gray-700 p-2 mt-5">
        © {currentYear} Copyright :<a className="text-gray-800"> Prime Ninja</a>
      </div>
    </footer>
  )
}

export default Footer
