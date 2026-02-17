import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectCartCount } from '../store/CartSlice'

function Navbar() {
  const cartCount = useSelector(selectCartCount)

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-brand">
        <span className="navbar-brand-leaf">🌿</span>
        Paradise <span>Nursery</span>
      </Link>

      <ul className="navbar-nav">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/products">Plants</Link></li>
        <li>
          <Link to="/cart" className="navbar-cart-link">
            🛒 Cart
            <span className="cart-count">{cartCount}</span>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar