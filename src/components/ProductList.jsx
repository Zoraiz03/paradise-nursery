import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addItem, selectCartItems } from '../store/CartSlice'
import Navbar from './Navbar'
import '../App.css'

const plantsData = [
  {
    category: 'Air-Purifying Plants',
    icon: '💨',
    subtitle: '6 varieties · Breathe cleaner air',
    plants: [
      {
        name: 'Peace Lily',
        price: 18.99,
        image: 'https://images.unsplash.com/photo-1616690248441-798ec5dfdc45?w=400&q=80',
        description: 'Elegant white blooms, thrives in low light conditions.',
      },
      {
        name: 'Spider Plant',
        price: 12.99,
        image: 'https://images.unsplash.com/photo-1572688484438-313a6e50c333?w=400&q=80',
        description: 'Perfect for beginners with beautiful arching leaves.',
      },
      {
        name: 'Snake Plant',
        price: 22.99,
        image: 'https://images.unsplash.com/photo-1598880940952-64f8f21c7b5b?w=400&q=80',
        description: 'Tolerates neglect and low light beautifully.',
      },
      {
        name: 'Dracaena',
        price: 27.99,
        image: 'https://images.unsplash.com/photo-1637967886160-fd78dc3ce3f5?w=400&q=80',
        description: 'Striking striped leaves with very low maintenance.',
      },
      {
        name: 'Golden Pothos',
        price: 14.99,
        image: 'https://images.unsplash.com/photo-1622398925373-3f91b1e275f5?w=400&q=80',
        description: 'Fast grower with gorgeous trailing golden vines.',
      },
      {
        name: 'Boston Fern',
        price: 16.99,
        image: 'https://images.unsplash.com/photo-1597305877032-0668b3c6413a?w=400&q=80',
        description: 'Lush feathery fronds, loves humid environments.',
      },
    ],
  },
  {
    category: 'Tropical Beauties',
    icon: '🌴',
    subtitle: '6 varieties · Bring the jungle home',
    plants: [
      {
        name: 'Monstera Deliciosa',
        price: 34.99,
        image: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=400&q=80',
        description: 'Iconic split leaves, the undisputed queen of houseplants.',
      },
      {
        name: 'Bird of Paradise',
        price: 48.99,
        image: 'https://images.unsplash.com/photo-1604480132736-44c188fe4d20?w=400&q=80',
        description: 'Bold tropical statement plant for bright sunny spaces.',
      },
      {
        name: 'Calathea Orbifolia',
        price: 29.99,
        image: 'https://images.unsplash.com/photo-1617957718587-8b1e7b576b70?w=400&q=80',
        description: 'Stunning silver-striped round leaves, truly mesmerizing.',
      },
      {
        name: 'Philodendron Brasil',
        price: 19.99,
        image: 'https://images.unsplash.com/photo-1591958911259-bee2173bdcab?w=400&q=80',
        description: 'Vibrant yellow-green variegated heart-shaped leaves.',
      },
      {
        name: 'Alocasia Polly',
        price: 32.99,
        image: 'https://images.unsplash.com/photo-1599598425947-5202edd56bdb?w=400&q=80',
        description: 'Deep green leaves with striking white veins.',
      },
      {
        name: 'Banana Plant',
        price: 39.99,
        image: 'https://images.unsplash.com/photo-1587116861421-f4ad4e95bbf2?w=400&q=80',
        description: 'Brings dramatic tropical vibes to any indoor space.',
      },
    ],
  },
  {
    category: 'Succulents & Cacti',
    icon: '🌵',
    subtitle: '6 varieties · Low maintenance, high style',
    plants: [
      {
        name: 'Echeveria Elegans',
        price: 9.99,
        image: 'https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=400&q=80',
        description: 'Perfect rosette shape in pastel blue-green tones.',
      },
      {
        name: 'Barrel Cactus',
        price: 11.99,
        image: 'https://images.unsplash.com/photo-1520302630591-fd1a1c393a70?w=400&q=80',
        description: 'Classic round cactus, virtually indestructible.',
      },
      {
        name: 'Aloe Vera',
        price: 15.99,
        image: 'https://images.unsplash.com/photo-1598965402089-897ce52e8355?w=400&q=80',
        description: 'Medicinal marvel with sculptural natural appeal.',
      },
      {
        name: 'Jade Plant',
        price: 17.99,
        image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=400&q=80',
        description: 'Thick oval leaves, traditionally brings good luck.',
      },
      {
        name: 'String of Pearls',
        price: 21.99,
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80',
        description: 'Cascading bead-like leaves, utterly unique trailing plant.',
      },
      {
        name: 'Zebra Haworthia',
        price: 13.99,
        image: 'https://images.unsplash.com/photo-1624560152536-2d31cf2d8eff?w=400&q=80',
        description: 'Striped miniature succulent, perfect for desks.',
      },
    ],
  },
]

function ProductList() {
  const dispatch = useDispatch()
  const cartItems = useSelector(selectCartItems)
  const [toast, setToast] = useState(null)

  const addedNames = cartItems.map(item => item.name)

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant))
    setToast(`${plant.name} added to cart!`)
    setTimeout(() => setToast(null), 2500)
  }

  return (
    <div className="products-page">
      <Navbar />

      <div className="products-banner">
        <h1>Our Plant Collection</h1>
        <p>Hand-selected houseplants to transform your living space</p>
      </div>

      <div className="products-wrapper">
        {plantsData.map((cat) => (
          <div key={cat.category} className="category-block">

            <div className="category-label">
              <div className="category-label-icon">{cat.icon}</div>
              <div className="category-label-text">
                <h2>{cat.category}</h2>
                <p>{cat.subtitle}</p>
              </div>
              <div className="category-line" />
            </div>

            <div className="plant-grid">
              {cat.plants.map((plant) => {
                const inCart = addedNames.includes(plant.name)
                return (
                  <div key={plant.name} className="plant-card">
                    <div className="plant-img-wrap">
                      <img
                        src={plant.image}
                        alt={plant.name}
                        loading="lazy"
                      />
                    </div>
                    <div className="plant-card-body">
                      <h3 className="plant-card-name">{plant.name}</h3>
                      <p className="plant-card-desc">{plant.description}</p>
                      <div className="plant-card-footer">
                        <div className="plant-card-price">
                          ${plant.price.toFixed(2)}
                          <span> / plant</span>
                        </div>
                        <button
                          className="btn-add"
                          onClick={() => handleAddToCart(plant)}
                          disabled={inCart}
                        >
                          {inCart ? (
                            <>
                              <span className="btn-add-check">✓</span> Added
                            </>
                          ) : (
                            <>+ Add</>
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>

          </div>
        ))}
      </div>

      {toast && (
        <div className="toast">
          🌿 {toast}
        </div>
      )}
    </div>
  )
}

export default ProductList