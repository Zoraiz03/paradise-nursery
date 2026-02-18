import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addItem, selectCartItems } from '../store/CartSlice'
import Navbar from './Navbar'
import '../App.css'

// ── Image imports ──────────────────────────────────────────────
// Air-Purifying Plants
import peaceLily from '../assets/images/peace-lily.jpg'
import spiderPlant from '../assets/images/spider-plant.jpg'
import snakePlant from '../assets/images/snake-plant.jpg'
import dracaena from '../assets/images/dracaena.jpg'
import goldenPothos from '../assets/images/golden-pothos.jpg'
import bostonFern from '../assets/images/boston-fern.jpg'

// Tropical Beauties
import monsteraDeliciosa from '../assets/images/monstera-deliciosa.jpg'
import birdOfParadise from '../assets/images/birdofParadise.jpg'
import caltheaOrbifolia from '../assets/images/calathea-orbifolia.jpg'
import philodendronBrasil from '../assets/images/philodendron-brasil.jpg'
import alocasiaPolly from '../assets/images/alocasia-polly.jpg'
import bananaPlant from '../assets/images/banana.jpg'

// Succulents & Cacti
import echeveriaElegans from '../assets/images/echeveria-elegans.jpg'
import barrelCactus from '../assets/images/barrel-cactus.jpg'
import aloeVera from '../assets/images/aloe-vera.jpg'
import jadePlant from '../assets/images/jade-plant.jpg'
import stringOfPearls from '../assets/images/stringofPearls.jpg'
import zebraHaworthia from '../assets/images/zebra-haworthia.jpg'
// ───────────────────────────────────────────────────────────────

const plantsData = [
  {
    category: 'Air-Purifying Plants',
    subtitle: '6 varieties — Breathe cleaner, live better',
    plants: [
      {
        name: 'Peace Lily',
        price: 18.99,
        image: peaceLily,
        description: 'Elegant white blooms, thrives in low light conditions.',
      },
      {
        name: 'Spider Plant',
        price: 12.99,
        image: spiderPlant,
        description: 'Perfect for beginners with beautiful arching leaves.',
      },
      {
        name: 'Snake Plant',
        price: 22.99,
        image: snakePlant,
        description: 'Tolerates neglect and low light beautifully.',
      },
      {
        name: 'Dracaena',
        price: 27.99,
        image: dracaena,
        description: 'Striking striped leaves with very low maintenance.',
      },
      {
        name: 'Golden Pothos',
        price: 14.99,
        image: goldenPothos,
        description: 'Fast grower with gorgeous trailing golden vines.',
      },
      {
        name: 'Boston Fern',
        price: 16.99,
        image: bostonFern,
        description: 'Lush feathery fronds, loves humid environments.',
      },
    ],
  },
  {
    category: 'Tropical Beauties',
    subtitle: '6 varieties — Bring the jungle indoors',
    plants: [
      {
        name: 'Monstera Deliciosa',
        price: 34.99,
        image: monsteraDeliciosa,
        description: 'Iconic split leaves, the undisputed queen of houseplants.',
      },
      {
        name: 'Bird of Paradise',
        price: 48.99,
        image: birdOfParadise,
        description: 'Bold tropical statement plant for bright sunny spaces.',
      },
      {
        name: 'Calathea Orbifolia',
        price: 29.99,
        image: caltheaOrbifolia,
        description: 'Stunning silver-striped round leaves, truly mesmerizing.',
      },
      {
        name: 'Philodendron Brasil',
        price: 19.99,
        image: philodendronBrasil,
        description: 'Vibrant yellow-green variegated heart-shaped leaves.',
      },
      {
        name: 'Alocasia Polly',
        price: 32.99,
        image: alocasiaPolly,
        description: 'Deep green leaves with striking white veins.',
      },
      {
        name: 'Banana Plant',
        price: 39.99,
        image: bananaPlant,
        description: 'Brings dramatic tropical vibes to any indoor space.',
      },
    ],
  },
  {
    category: 'Succulents & Cacti',
    subtitle: '6 varieties — Low maintenance, high style',
    plants: [
      {
        name: 'Echeveria Elegans',
        price: 9.99,
        image: echeveriaElegans,
        description: 'Perfect rosette shape in pastel blue-green tones.',
      },
      {
        name: 'Barrel Cactus',
        price: 11.99,
        image: barrelCactus,
        description: 'Classic round cactus, virtually indestructible.',
      },
      {
        name: 'Aloe Vera',
        price: 15.99,
        image: aloeVera,          // ✅ fixed: was "img" before
        description: 'Medicinal marvel with sculptural natural appeal.',
      },
      {
        name: 'Jade Plant',
        price: 17.99,
        image: jadePlant,         // ✅ fixed: was "img" before
        description: 'Thick oval leaves, traditionally brings good luck.',
      },
      {
        name: 'String of Pearls',
        price: 21.99,
        image: stringOfPearls,
        description: 'Cascading bead-like leaves, utterly unique trailing plant.',
      },
      {
        name: 'Zebra Haworthia',
        price: 13.99,
        image: zebraHaworthia,
        description: 'Striped miniature succulent, perfect for desks and shelves.',
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
    setToast(`${plant.name} added to cart`)
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
                          {inCart ? '✓ Added' : '+ Add to Cart'}
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

      {toast && <div className="toast">{toast}</div>}
    </div>
  )
}

export default ProductList