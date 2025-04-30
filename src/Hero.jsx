import React from "react"
import heroImg from "./assets/hero.svg"

function Hero() {
  return (
    <section className='hero'>
      <div className='hero-center'>
        <div className='hero-title'>
          <h1>My Portfolio</h1>
          <p>A list of my portfolio sites running on Netlify...</p>
        </div>
        <div className='img-container'>
          <img src={heroImg} alt='me coding on my pc' />
        </div>
      </div>
    </section>
  )
}

export default Hero
