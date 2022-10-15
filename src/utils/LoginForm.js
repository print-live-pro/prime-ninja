import React, { useState } from "react"
import { signInWithEmailAndPassword } from "firebase/auth"
import { auth } from "../../config/firebase"
import { showToast } from "./common"

const LoginForm = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  })

  const handleLogin = async (e) => {
    const { email, password } = data
    e.preventDefault()
    try {
      await signInWithEmailAndPassword(auth, email, password)
      showToast("Sign in successful!")
    } catch (err) {
      showToast(err.message, "err")
    }
  }

  return (
    <div className="block p-6 max-w-sm">
      <form onSubmit={handleLogin}>
        <div className="form-group mb-6">
          <label
            htmlFor="exampleInputEmail1"
            className="form-label inline-block mb-2 text-gray-700"
          >
            Email address
          </label>
          <input
            type="email"
            className="form-control
          block
          w-full
          px-3
          py-1.5
          text-base
          font-normal
          text-gray-700
          bg-white bg-clip-padding
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            value={data.email}
            onChange={(e) =>
              setData({
                ...data,
                email: e.target.value,
              })
            }
            required
          />
        </div>
        <div className="form-group mb-6">
          <label
            htmlFor="exampleInputPassword1"
            className="form-label inline-block mb-2 text-gray-700"
          >
            Password
          </label>
          <input
            type="password"
            className="form-control block
          w-full
          px-3
          py-1.5
          text-base
          font-normal
          text-gray-700
          bg-white bg-clip-padding
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            id="exampleInputPassword1"
            placeholder="Password"
            value={data.password}
            onChange={(e) =>
              setData({
                ...data,
                password: e.target.value,
              })
            }
            required
          />
        </div>
        <button
          type="submit"
          className="nc-Button relative inline-flex items-center justify-center rounded-full transition-colors text-sm sm:text-base font-medium py-1 px-4 sm:py-1.5 sm:px-6  ttnc-ButtonPrimary disabled:bg-opacity-90 bg-slate-900 hover:bg-slate-800 text-slate-50 shadow-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-6000"
        >
          Login
        </button>
      </form>
    </div>
  )
}

export default LoginForm
