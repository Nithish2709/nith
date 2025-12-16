import React from 'react'

export default function About() {
  return (
    <div className="flex justify-center items-center min-h-[70vh] px-6">

      {/* ABOUT CARD */}
      <div className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl text-center">

        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          About Us
        </h2>

        <p className="text-gray-600 mb-4">
          Welcome to <span className="font-semibold text-gray-800">My App</span>,
          your trusted e-commerce platform for quality products and seamless shopping.
        </p>

        <p className="text-gray-600 mb-4">
          Our goal is to provide customers with a simple, fast, and secure
          online shopping experience, powered by modern web technologies.
        </p>

        <p className="text-gray-600">
          Built with ❤️ using React and Tailwind CSS.
        </p>

      </div>
    </div>
  )
}
