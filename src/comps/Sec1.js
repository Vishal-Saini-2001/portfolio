import React from 'react'
import photo from '../assets/profile.png'
import '../css/Sec1.css'
import ReactTypingEffect from 'react-typing-effect';
import { useNavigate } from 'react-router-dom';


const Sec1 = () => {
    const navigate = useNavigate();
    return (
        <>
            <div className='sec1'>
                <div id='content' data-aos="fade-right">
                    <h3>Hi there! Myself</h3>
                    <h1>Vishal Saini</h1>
                    <br></br>
                    <h3>and, i am a </h3>
                    <ReactTypingEffect
                        text={["MERN Stack Developer", "Front-End Developer", "Back-End Developer"]}
                        cursorRenderer={cursor => <h2>{cursor}</h2>}
                        displayTextRenderer={(text, i) => {
                            return (
                                <h2>
                                    {text.split('').map((char, i) => {
                                        return (
                                            <span
                                                key={i}
                                                style={i % 2 === 0 ? { color: '#8C489F' } : {}}
                                            >{char}
                                            </span>
                                        );
                                    })}
                                </h2>
                            );
                        }}
                    />
                    <h1></h1>
                </div>
                <div id='photo' data-aos="fade-up">
                    <img src={photo} />
                </div>
            </div>
            <div id='sec1-btns' data-aos="zoom-in">
                <button id='sec1-btn' onClick={()=>navigate('/resume')} >Resume</button>
                <a href='https://github.com/Vishal-Saini-2001' target='blank'><i class="fa-brands fa-github"></i></a>
                <a href='https://www.linkedin.com/in/vishal-saini-a6667b287/' target='blank'><i class="fa-brands fa-linkedin"></i></a>
                <a href='https://www.hackerrank.com/profile/vishalsaini3054' target='blank'><i class="fa-brands fa-hackerrank"></i></a>
                <a href='https://www.youtube.com/@CodeBegins' target='blank'><i class="fa-brands fa-youtube"></i></a>
            </div>

        </>
    )
}

export default Sec1