import { useState } from 'react'
import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Login() {
  const [email, sete] = useState("")
  const navigate = useNavigate()

  const handleLogin = () => {
    localStorage.setItem("email", email)
    navigate("/")
  }

  return (
    <div className="flex justify-center items-center min-h-[70vh] px-4">

      {/* LOGIN CARD */}
      <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-md">

        {/* TITLE */}
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Login
        </h2>

        <form className="space-y-5">

          {/* EMAIL */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              onChange={(e) => sete(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-400"
            />
          </div>

          {/* SUBMIT */}
          <button
            onClick={handleLogin}
            className="w-full py-2 bg-sky-500 text-white rounded-md font-semibold hover:bg-sky-600 transition"
          >
            Submit
          </button>

        </form>

      </div>
    </div>
  )
}
