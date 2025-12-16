import React from 'react'
import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import { API } from "../utils/api"

export default function () {
  const { id } = useParams()
  const [products, setproducts] = useState(null)

  useEffect(() => {
    fetch(`${API}/api/Product`)
      .then(res => res.json())
      .then(data => {
        const k = data.find(p => p._id === id)
        setproducts(k)
      })
  })

  const p = products

  if (!p)
    return (
      <div className="text-center mt-20 text-xl text-gray-600">
        Product not found
      </div>
    )

  return (
    <div className="flex justify-center px-6 py-12" key={p.id}>

      {/* CONFIRMATION CARD */}
      <div className="bg-white rounded-2xl shadow-lg p-8 max-w-lg w-full text-center">

        {/* TITLE */}
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Order Summary
        </h2>

        {/* IMAGE */}
        <div className="flex justify-center mb-6">
          <img
            src={p.image}
            alt={p.name}
            className="w-72 h-72 object-cover rounded-xl"
          />
        </div>

        {/* PRODUCT INFO */}
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          {p.name}
        </h3>

        <p className="text-sky-600 text-lg font-bold mb-3">
          ₹ {p.price}
        </p>

        <p className="text-gray-600 mb-6">
          {p.description}
        </p>

        {/* SUCCESS MESSAGE */}
        <div className="bg-green-100 text-green-700 py-3 rounded-lg font-semibold">
          🎆 Order placed successfully!
        </div>

      </div>
    </div>
  )
}
