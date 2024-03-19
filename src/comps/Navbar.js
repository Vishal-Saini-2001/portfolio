import React, { useState } from 'react'
import logo from '../assets/MyPortfolio-removebg-preview.png'
import '../css/Nav.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {

  const navigate = useNavigate();
  const [bar, setBar] = useState(false);

  const [popNavStyle, setPopNavStyle] = useState({
    position: "absolute",
    top: "-310px"
  })

  const handleOpenPopMenu = () => {
    setBar(true);
    setPopNavStyle({
      position: "absolute",
      top: "0px"
    })
  }

  const handleClosePopBtn = () => {
    setBar(false);
    setPopNavStyle({
      position: "absolute",
      top: "-310px"
    })
  }
  return (
    <>
      <div id='pop' className='pop-nav' style={popNavStyle}>
        <button id='cut' onClick={handleClosePopBtn}><i class="fa-solid fa-xmark"></i></button>
        <br />
        <div id='links'>
          <div onClick={()=>navigate('/')}>Home</div>
          <div onClick={()=>navigate('/about')}>About</div>
          <div onClick={()=>navigate('/skills')}>Skills</div>
          <div onClick={()=>navigate('/project')}>Projects</div>
          <div onClick={()=>navigate('/contact')}>Contact Me</div>
        </div>
      </div>
      <div className='nav' data-aos="fade-down">
        <div id='logo'>
          <img src={logo} />
        </div>
        <div id='nav-links'>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/skills'>My Skills</Link></li>
            <li><Link to='/project'>My Projects</Link></li>
            <li><Link to='/contact'>Contact Me</Link></li>
          </ul>
        </div>
        <button hidden={bar} id='bars' onClick={handleOpenPopMenu}><i className="fa-solid fa-bars"></i></button>
      </div>
    </>

  )
}

export default Navbar