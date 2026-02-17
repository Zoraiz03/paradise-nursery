import React from 'react'
import { Link } from 'react-router-dom'
import AboutUs from './AboutUs'
import '../App.css'

function LandingPage() {
  return (
    <div className="landing-page">
      <div className="landing-content">

        <div className="landing-badge">
          🌿 &nbsp; Est. 2024 &nbsp; · &nbsp; Premium Houseplants
        </div>

        <h1 className="landing-title">Paradise</h1>
        <span className="landing-title-italic">Nursery</span>

        <div className="landing-divider">
          <div className="landing-divider-dot" />
        </div>

        <AboutUs />

        <Link to="/products" className="btn-get-started">
          Explore Our Plants
          <span className="btn-get-started-arrow">→</span>
        </Link>

      </div>
    </div>
  )
}

export default LandingPage