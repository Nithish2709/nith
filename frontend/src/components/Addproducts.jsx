import React from 'react'
import { useState } from 'react'
import { API } from "../utils/api"

export default function Addproducts() {
  const [form, setform] = useState({
    name: "",
    price: "",
    image: "",
    description: ""
  })

  const handleChange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const product = {
      name: form.name,
      price: form.price,
      img: form.image,
      description: form.description
    }

    try {
      const res = await fetch(`${API}/api/postProduct`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(product)
      })

      if (res.ok) {
        alert("product added successfully")
        setform({
          name: "",
          price: "",
          image: "",
          description: ""
        })
      } else {
        alert("failed to add product")
      }
    } catch (error) {
      console.log(error)
      alert("failed to add product")
    }
  }

  return (
    <div className="flex justify-center items-center min-h-[70vh] px-6">

      {/* FORM CARD */}
      <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-lg">

        {/* TITLE */}
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Add New Product
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">

          {/* NAME */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Product Name
            </label>
            <input
              name="name"
              type="text"
              placeholder="Enter product name"
              value={form.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-sky-400 focus:outline-none"
            />
          </div>

          {/* PRICE */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Price
            </label>
            <input
              name="price"
              type="text"
              placeholder="Enter price"
              value={form.price}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-sky-400 focus:outline-none"
            />
          </div>

          {/* IMAGE */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Image URL
            </label>
            <input
              name="image"
              type="text"
              placeholder="Enter image URL"
              value={form.image}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-sky-400 focus:outline-none"
            />
          </div>

          {/* DESCRIPTION */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Description
            </label>
            <input
              name="description"
              type="text"
              placeholder="Enter description"
              value={form.description}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-sky-400 focus:outline-none"
            />
          </div>

          {/* SUBMIT */}
          <button
            type="submit"
            className="w-full py-3 bg-sky-500 text-white rounded-lg font-semibold hover:bg-sky-600 transition"
          >
            Add Product
          </button>

        </form>

      </div>
    </div>
  )
}
