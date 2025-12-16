import React from 'react'

export default function Contact() {
  return (
    <div className="flex justify-center items-center min-h-[70vh] px-6">

      {/* CONTACT CARD */}
      <div className="bg-white rounded-2xl shadow-lg p-8 max-w-md w-full text-center">

        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Contact Us
        </h2>

        <p className="text-gray-600 mb-6">
          Have questions or need support? We’re here to help you.
        </p>

        <div className="space-y-3 text-gray-700">
          <p>
            📧 <span className="font-medium">Email:</span> support@myapp.com
          </p>
          <p>
            📞 <span className="font-medium">Phone:</span> +91 98765 43210
          </p>
          <p>
            📍 <span className="font-medium">Address:</span> India
          </p>
        </div>

      </div>
    </div>
  )
}
