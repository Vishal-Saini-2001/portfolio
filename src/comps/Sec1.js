import React from 'react'
import '../css/Sec1.css'
import ReactTypingEffect from 'react-typing-effect';
import resumePdf from './Resume.pdf';

const Sec1 = () => {
    return (
        <section id="home">
            <div className='sec1'>
                <div id='content' data-aos="fade-up">
                    <div className="hero-badge">Welcome to my portfolio</div>
                    <h1>Vishal Saini</h1>
                    <div className="typing-container">
                        <h3>I build things for the web as a </h3>
                        <ReactTypingEffect
                            text={["Front-End Developer", "MERN Stack Developer", "Full Stack Developer"]}
                            cursorRenderer={cursor => <h2 className="typing-cursor">{cursor}</h2>}
                            displayTextRenderer={(text, i) => {
                                return (
                                    <h2 className="typing-text">
                                        {text}
                                    </h2>
                                );
                            }}
                            typingDelay={500}
                            eraseDelay={2000}
                        />
                    </div>
                    <p className="hero-desc">
                        Passionate Web Developer focused on crafting clean, user-friendly experiences and building robust web applications.
                    </p>

                    <div id='sec1-btns'>
                        <a id='sec1-btn' href={resumePdf} target='_blank' rel='noreferrer'>
                            <span>View Resume</span>
                            <i className="fa-solid fa-arrow-right"></i>
                        </a>
                        <div className="social-links">
                            <a href='https://github.com/Vishal-Saini-2001' target='blank'><i className="fa-brands fa-github"></i></a>
                            <a href='https://www.linkedin.com/in/vishal-saini-a6667b287/' target='blank'><i className="fa-brands fa-linkedin"></i></a>
                            <a href='https://www.hackerrank.com/profile/vishalsaini3054' target='blank'><i className="fa-brands fa-hackerrank"></i></a>
                            <a href='https://www.youtube.com/@CodeBegins' target='blank'><i className="fa-brands fa-youtube"></i></a>
                        </div>
                    </div>
                </div>
                <div className="scroll-indicator">
                    <div className="mouse"></div>
                </div>
            </div>
        </section>
    )
}

export default Sec1