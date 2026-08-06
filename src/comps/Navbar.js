import React, { useState } from 'react'
import logo from '../assets/MyPortfolio-removebg-preview.png'
import '../css/Nav.css';


const Navbar = () => {


  const [bar, setBar] = useState(false);

  const handleOpenPopMenu = () => {
    setBar(true);
  }

  const handleClosePopBtn = () => {
    setBar(false);
  }
  
  return (
    <>
      <div id='pop' className={`pop-nav ${bar ? 'active' : ''}`}>
        <button id='cut' onClick={handleClosePopBtn}><i className="fa-solid fa-xmark"></i></button>
        <br />
        <div id='links'>
          <a href='#home' onClick={handleClosePopBtn}>Home</a>
          <a href='#about' onClick={handleClosePopBtn}>About</a>
          <a href='#skills' onClick={handleClosePopBtn}>Skills</a>
          <a href='#projects' onClick={handleClosePopBtn}>Projects</a>
          <a href='#contact' onClick={handleClosePopBtn}>Contact Me</a>
        </div>
      </div>
      <div className='nav' data-aos="fade-down">
        <div id='logo'>
          <img src={logo} />
        </div>
        <div id='nav-links'>
          <ul>
            <li><a href='#home'>Home</a></li>
            <li><a href='#about'>About</a></li>
            <li><a href='#skills'>My Skills</a></li>
            <li><a href='#projects'>My Projects</a></li>
            <li><a href='#contact'>Contact Me</a></li>
          </ul>
        </div>
        <button hidden={bar} id='bars' onClick={handleOpenPopMenu}><i className="fa-solid fa-bars"></i></button>
      </div>
    </>

  )
}

export default Navbar