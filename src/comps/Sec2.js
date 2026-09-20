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
  role: 'Associate Software Engineer',
  education: 'B.Tech CSE, COER University',
  experience: 'XenonStack (Jan 2025 - Apr 2026)',
  skills: ['React', 'Next.js', 'FastAPI', 'PostgreSQL'],
};

developer.workHard();`}
              </code>
            </pre>
          </div>
        </div>
        <div id='about-text' data-aos="fade-left">
          <h1><span>About</span> me</h1>
          <p>Hello Everyone! My name is Vishal Saini.</p>
          <p>I am a B.Tech graduate in Computer Science & Engineering from COER University Roorkee.</p>
          <p>With over a year of experience as an Associate Software Engineer at XenonStack, I specialize in building responsive web applications using React.js, Next.js, TypeScript, and Python (FastAPI). I have hands-on experience in full-stack development, integrating REST APIs, and using AI-assisted development tools like Cursor.</p>
        </div>
      </div>
    </section>
  )
}

export default Sec2