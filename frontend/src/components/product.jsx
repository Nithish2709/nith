import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { API } from "../utils/api"
import { Link } from 'react-router-dom'

export default function product() {
  const { id } = useParams()
  const [products, setproducts] = useState(null)

  useEffect(() => {
    fetch(`${API}/api/Product`)
      .then(res => res.json())
      .then(data => {
        const p = data.find(p => p._id === id)
        setproducts(p)
      })
  })

  const p = products

  if (!products)
    return (
      <div className="text-center mt-20 text-xl text-gray-600">
        Product not found
      </div>
    )

  return (
    <div className="flex justify-center px-6 py-12" key={p._id}>

      {/* PRODUCT CARD */}
      <div className="bg-white rounded-2xl shadow-lg p-8 max-w-lg w-full">

        {/* TITLE */}
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Product Details
        </h2>

        {/* IMAGE */}
        <div className="flex justify-center mb-6">
          <img
            src={p.image}
            alt={p.name}
            className="w-80 h-80 object-cover rounded-xl hover:scale-105 transition"
          />
        </div>

        {/* INFO */}
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          {p.name}
        </h3>

        <p className="text-sky-600 text-lg font-bold mb-3">
          ₹ {p.price}
        </p>

        <p className="text-gray-600 mb-6">
          {p.description}
        </p>

        {/* BUY NOW */}
        <Link to={`/buynow/${p._id}`}>
          <button className="w-full py-3 bg-sky-500 text-white rounded-lg text-lg font-semibold hover:bg-sky-600 transition">
            Buy Now
          </button>
        </Link>

      </div>
    </div>
  )
}
