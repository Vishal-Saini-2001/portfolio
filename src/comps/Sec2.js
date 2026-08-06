import React from 'react'
import '../css/Sec2.css'
const Sec2 = () => {
  return (
    <section id="about">
      <div className='sec2'>
        <div id='image' className="code-window" data-aos="zoom-out">
          <div className="window-header">
            <span className="dot red"></span>
            <span className="dot yellow"></span>
            <span className="dot green"></span>
          </div>
          <div className="window-body">
            <pre>
              <code>
                {`const developer = {
  name: 'Vishal Saini',
  role: 'Full Stack Web Developer',
  location: 'Haridwar, India',
  skills: ['React', 'Node.js', 'MongoDB'],
  passion: 'Building scalable applications'
};

developer.workHard();`}
              </code>
            </pre>
          </div>
        </div>
        <div id='about-text' data-aos="fade-left">
          <h1><span>About</span> me</h1>
          <p>Hello Everyone! My name is Vishal Saini.</p>
          <p>I am a B.Tech student at COER University Roorkee.</p>
          <p>I am a passionate Web Developer who loves creating interactive, detail-oriented, and highly functional web applications. I am constantly learning and looking to make my career in this dynamic field.</p>
        </div>
      </div>
    </section>
  )
}

export default Sec2