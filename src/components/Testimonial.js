import React from 'react'
import './Testimonial.css'
import avatar from "../assets/KANKANA PIC 2.jpg"
const Testimonial = () => {
  return (
    <div className='section1'>
    <div className='title'>
      <h2>Happy Customers</h2>
    </div>
    <div className='testimonials'>
      <div className='testimonial'>
        <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            asperiores eaque.
        </p>
        <div className='info'>
          <img src={avatar} alt=""/>
          <div className='details'>
            <h1>Kankana Dutta</h1>
            <span>CEO-Serin Web Solutions</span>
          </div>
        </div>
      </div>
      <div className='testimonial'>
        <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            asperiores eaque.
        </p>
        <div className='info'>
          <img src={avatar} alt=""/>
          <div className='details'>
            <h1>Nadita Dey</h1>
            <span>CEO-Serin Web Solutions</span>
          </div>
        </div>
      </div>
      <div className='testimonial'>
        <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            asperiores eaque.
        </p>
        <div className='info'>
          <img src={avatar} alt=""/>
          <div className='details'>
            <h1>Debolina Das</h1>
            <span>CEO-Serin Web Solutions</span>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Testimonial
