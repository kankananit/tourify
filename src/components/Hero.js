import React from 'react'
import homeImage from "../assets/hero.png"
import "./Hero.css"
const Hero = () => {
  return (
    <div className='section'>
      <div className='background'>
        <img src={homeImage} alt=""/>
      </div>
        <div className='content'>
          <div className='title'>
            <h1>TRAVEL TO EXPLORE</h1>
            <p></p>
          </div>
          <div className='search'>
            <div className='container'>
              <label htmlFor=''>Where you want to go</label>
              <input type="text" placeholder='Search your location'/>
            </div>
            <div className='container'>
              <label htmlFor=''>Check-in</label>
              <input type="date"/>
            </div>
            <div className='container'>
              <label htmlFor=''>Check-out</label>
              <input type="date"/>
            </div>
            <button>Explore Now</button>
          </div>
        </div>
    </div>
  )
}

export default Hero
