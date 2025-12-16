import About from "./components/About"
import { useState, useEffect } from 'react'
import Contact from "./components/Contact"
import Product from "./components/product"
import Home from "./components/Home"
import Products from "./components/Products"
import { Routes, Route, Link } from 'react-router-dom'
import Cart from "./components/Cart"
import BuyNow from "./components/BuyNow"
import Login from "./components/Login"
import ProtectedRoute from "./pages/protectedRoute"
import AddProduct from "./components/Addproducts"

function App() {

  const [cart, setcart] = useState([])

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart))
  }, [cart])

  const lagout = () => {
    localStorage.removeItem("email")
    window.location.reload()
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-300 to-white">

      {/* HEADER */}
      <header className="w-full px-8 py-4">
        <div className="flex items-center justify-between">

          {/* LOGO */}
          <h1 className="text-2xl font-bold text-white tracking-wide">
            My App
          </h1>

          {/* NAVIGATION */}
          <nav className="bg-white shadow-lg rounded-xl px-6 py-3 flex gap-4 items-center ml-20">
            <Link to="/" className="text-gray-700 hover:text-sky-500 font-medium">Home</Link>
            <Link to="/about" className="text-gray-700 hover:text-sky-500 font-medium">About</Link>
            <Link to="/contact" className="text-gray-700 hover:text-sky-500 font-medium">Contact</Link>
            <Link to="/products" className="text-gray-700 hover:text-sky-500 font-medium">Products</Link>
            <Link to="/cart" className="text-gray-700 hover:text-sky-500 font-medium">
              Cart ({cart.length})
            </Link>
            <Link to="/addproduct" className="text-gray-700 hover:text-sky-500 font-medium">
              Add Product
            </Link>

            {localStorage.getItem("email") ? (
              <button
                onClick={lagout}
                className="ml-3 px-4 py-1 rounded-md bg-red-500 text-white hover:bg-red-600 transition"
              >
                Logout
              </button>
            ) : (
              <Link
                to="/login"
                className="ml-3 px-4 py-1 rounded-md bg-sky-500 text-white hover:bg-sky-600 transition"
              >
                Login
              </Link>
            )}
          </nav>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <main className="px-8 py-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products" element={<Products cart={cart} setcart={setcart} />} />
          <Route path="/product/:id" element={<Product />} />
          <Route
            path="/cart"
            element={
              <ProtectedRoute>
                <Cart cart={cart} setcart={setcart} />
              </ProtectedRoute>
            }
          />
          <Route path="/buynow/:id" element={<BuyNow />} />
          <Route path="/login" element={<Login />} />
          <Route path="/addproduct" element={<AddProduct />} />
        </Routes>
      </main>

    </div>
  )
}

export default App
