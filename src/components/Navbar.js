import React from 'react'
import logo from "../assets/logo.png";
import "./Navbar.css"
const Navbar = () => {
  return (
    <>
    <div className='Nav'>
      <div className='brand'>
        <div className='container'>
            <img src={logo} alt=""/>Tourify
        </div>
        <div className='toggle'>

        </div>
      </div>
      <ul>
        <li>
            <a href="#home">Home</a>
        </li>
        <li>
            <a href="#services">Services</a>
        </li>
        <li>
            <a href="#recomend">Places</a>
        </li>
        <li>
            <a href="#testimonials">Testimonials</a>
        </li>
      </ul>
      <button>Connect</button>
      </div>
    </>
  )
}

export default Navbar
