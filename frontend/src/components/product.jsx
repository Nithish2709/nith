import React, { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import { API } from "../utils/api"

export default function Product() {
  const { id } = useParams()
  const [product, setProduct] = useState(null)

  useEffect(() => {
    fetch(`${API}/api/Product`)
      .then(res => res.json())
      .then(data => {
        const found = data.find(p => p._id === id)
        setProduct(found)
      })
      .catch(err => console.error(err))
  }, [id])

  if (!product) {
    return (
      <div className="text-center mt-24 text-xl text-gray-600">
        Product not found
      </div>
    )
  }

  return (
    <div className="min-h-screen pt-24 flex justify-center px-6 py-12 bg-sky-100">

      {/* PRODUCT CARD */}
      <div className="bg-white rounded-2xl shadow-lg p-8 max-w-lg w-full">

        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Product Details
        </h2>

        {/* IMAGE */}
        <div className="flex justify-center mb-6">
          <img
            src={
              product.image?.startsWith("http")
                ? product.image
                : `${API}/${product.image}`
            }
            alt={product.name}
            className="w-80 h-80 object-cover rounded-xl hover:scale-105 transition"
          />
        </div>

        {/* INFO */}
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          {product.name}
        </h3>

        <p className="text-sky-600 text-lg font-bold mb-3">
          ₹ {product.price}
        </p>

        <p className="text-gray-600 mb-6">
          {product.description}
        </p>

        {/* BUY NOW */}
        <Link to={`/buynow/${product._id}`}>
          <button className="w-full py-3 bg-sky-500 text-white rounded-lg text-lg font-semibold hover:bg-sky-600 transition">
            Buy Now
          </button>
        </Link>

      </div>
    </div>
  )
}
