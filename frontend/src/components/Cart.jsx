import React from 'react'

export default function Cart({ cart, setcart }) {

  const removeItem = (id) => {
    setcart(cart.filter(item => item.id === id))
  }

  return (
    <div className="px-6 py-8">

      {/* PAGE TITLE */}
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        Your Cart
      </h2>

      {/* EMPTY CART */}
      {cart.length === 0 && (
        <p className="text-center text-gray-600 text-lg">
          Your cart is empty
        </p>
      )}

      {/* CART ITEMS */}
      <div className="max-w-3xl mx-auto space-y-4">
        {cart.map(item => (
          <div
            key={item.id}
            className="bg-white rounded-xl shadow-md p-5 flex justify-between items-center"
          >
            <div>
              <p className="text-lg font-semibold text-gray-800">
                {item.name}
              </p>
              <p className="text-sky-600 font-bold">
                ₹ {item.price}
              </p>
            </div>

            <button
              onClick={() => deleteProduct(item._id)}
              className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition"
            >
              Remove
            </button>
          </div>
        ))}
      </div>

    </div>
  )
}
