import React from 'react'
import '../css/Sec2.css'
import img from '../assets/profile.png';

const Sec2 = () => {
  return (
    <div className='sec2'>
        <div id='image' data-aos="zoom-out">
            <img src={img}/>
        </div>
        <div id='about' data-aos="fade-left">
            <h1><span>About</span> me</h1>
            <p>Hello Everyone! <br/> My name is Vishal Saini. <br/><br/> I am a B.Tech 3rd year student at COER University Roorkee. <br/><br/> I am a passionate Web Developer and also looking to make my career in this field.</p>
        </div>
    </div>
  )
}

export default Sec2