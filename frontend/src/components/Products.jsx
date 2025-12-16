import React from 'react'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { API } from "../utils/api"

export default function Products({ setcart, cart }) {
  const [products, setproducts] = useState([])

  useEffect(() => {
    fetch(`${API}/api/Product`)
      .then(res => res.json())
      .then(data => setproducts(data))
  }, [])

  const addTocart = (product) => {
    const item = {
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image
    }
    setcart([...cart, item])
  }

  const deleteProduct = async (id) => {
    const confirm = window.confirm("Are you sure you want to delete this product?")
    if (!confirm) return

    const res = await fetch(`http://localhost:2796/api/deleteProduct/${id}`, {
      method: "DELETE",
    })

    if (res.status === 200) {
      alert("Product deleted successfully")
      setproducts(products.filter(product => product._id !== id))
    } else {
      alert("Something went wrong")
    }
  }

  return (
    <div className="px-8 py-6">

      {/* PAGE TITLE */}
      <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
        Products
      </h2>

      {/* PRODUCT GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

        {products.map(p => (
          <div
            key={p._id || p.id}
            className="bg-white rounded-xl shadow-md hover:shadow-xl transition p-5 flex flex-col"
          >

            {/* PRODUCT IMAGE */}
            <div className="flex justify-center mb-4">
              <img
                src={p.image}
                alt={p.name}
                className="w-64 h-64 object-cover rounded-lg hover:scale-105 transition"
              />
            </div>

            {/* PRODUCT INFO */}
            <h3 className="text-xl font-semibold text-gray-800 mb-1">
              {p.name}
            </h3>

            <p className="text-sky-600 font-bold mb-2">
              ₹ {p.price}
            </p>

            <p className="text-gray-600 text-sm mb-4">
              {p.description}
            </p>

            {/* ACTION BUTTONS */}
            <div className="mt-auto flex flex-wrap gap-3">

              <button
                onClick={() => addTocart(p)}
                className="px-4 py-2 bg-sky-500 text-white rounded-md hover:bg-sky-600 transition"
              >
                Add to Cart
              </button>

              <button
                onClick={() => deleteProduct(p._id)}
                className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition"
              >
                Remove
              </button>

              <Link
                to={`/product/${p._id}`}
                className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100 transition"
              >
                View
              </Link>

            </div>
          </div>
        ))}

      </div>
    </div>
  )
}
