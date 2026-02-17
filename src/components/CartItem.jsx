import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {
  selectCartItems,
  selectCartTotal,
  selectCartCount,
  removeItem,
  updateQuantity,
} from '../store/CartSlice'
import Navbar from './Navbar'
import '../App.css'

function CartItem() {
  const dispatch = useDispatch()
  const items = useSelector(selectCartItems)
  const total = useSelector(selectCartTotal)
  const count = useSelector(selectCartCount)
  const [toast, setToast] = useState(null)

  const handleIncrease = (name) => {
    const item = items.find(i => i.name === name)
    if (item) dispatch(updateQuantity({ name, quantity: item.quantity + 1 }))
  }

  const handleDecrease = (name) => {
    const item = items.find(i => i.name === name)
    if (item) {
      if (item.quantity <= 1) {
        dispatch(removeItem(name))
      } else {
        dispatch(updateQuantity({ name, quantity: item.quantity - 1 }))
      }
    }
  }

  const handleDelete = (name) => {
    dispatch(removeItem(name))
  }

  const handleCheckout = () => {
    setToast('🎉 Coming Soon! Our checkout is on its way.')
    setTimeout(() => setToast(null), 3000)
  }

  return (
    <div className="cart-page">
      <Navbar />

      <div className="cart-banner">
        <h1>Your Shopping Cart</h1>
        <div className="cart-stats">
          <div className="cart-stat">
            🌿 Total Plants: <strong>{count}</strong>
          </div>
          <div className="cart-stat">
            💰 Total Cost: <strong>${total.toFixed(2)}</strong>
          </div>
        </div>
      </div>

      <div className="cart-wrapper">
        {items.length === 0 ? (
          <div className="empty-cart">
            <span className="empty-cart-emoji">🛒</span>
            <h2>Your cart is empty</h2>
            <p>Looks like you haven't added any plants yet.</p>
            <Link to="/products" className="btn-continue-shopping">
              ← Browse Plants
            </Link>
          </div>
        ) : (
          <>
            <div className="cart-items">
              {items.map((item) => (
                <div key={item.name} className="cart-card">

                  <img
                    src={item.image}
                    alt={item.name}
                    className="cart-card-img"
                  />

                  <div className="cart-card-info">
                    <h3>{item.name}</h3>
                    <p className="cart-card-unit">
                      Unit Price: ${item.price.toFixed(2)}
                    </p>
                    <p className="cart-card-subtotal">
                      Subtotal: ${(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>

                  <div className="cart-card-actions">
                    <div className="qty-row">
                      <button
                        className="qty-btn"
                        onClick={() => handleDecrease(item.name)}
                      >
                        −
                      </button>
                      <span className="qty-val">{item.quantity}</span>
                      <button
                        className="qty-btn"
                        onClick={() => handleIncrease(item.name)}
                      >
                        +
                      </button>
                    </div>
                    <button
                      className="btn-remove"
                      onClick={() => handleDelete(item.name)}
                    >
                      🗑 Remove
                    </button>
                  </div>

                </div>
              ))}
            </div>

            <div className="order-summary">
              <p className="order-summary-label">Order Total</p>
              <p className="order-summary-total">${total.toFixed(2)}</p>
              <p className="order-summary-items">
                {count} {count === 1 ? 'plant' : 'plants'} in your cart
              </p>
              <div className="order-summary-btns">
                <Link to="/products" className="btn-continue-shopping">
                  ← Continue Shopping
                </Link>
                <button className="btn-checkout" onClick={handleCheckout}>
                  Checkout →
                </button>
              </div>
            </div>
          </>
        )}
      </div>

      {toast && (
        <div className="toast">{toast}</div>
      )}
    </div>
  )
}

export default CartItem