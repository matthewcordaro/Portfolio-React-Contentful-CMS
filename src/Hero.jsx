import React from "react"
import heroImg from "./assets/hero.svg"

function Hero() {
  return (
    <section className='hero'>
      <div className='hero-center'>
        <div className='hero-title'>
          <h1>Contentful CMS</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
            quod commodi temporibus ab! Corporis atque illum ratione doloremque
            asperiores ab, vero repellat accusantium libero neque! Iusto
            voluptatem quos optio aperiam.
          </p>
        </div>
        <div className="img-container">
          <img src={heroImg} alt="person and the browser" />
        </div>
      </div>
    </section>
  )
}

export default Hero
