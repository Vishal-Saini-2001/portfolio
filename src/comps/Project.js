import React from 'react'
import '../css/Project.css'
import p1 from '../assets/p1.png'
// import p2 from '../assets/p2.png'
import p3 from '../assets/p3.png'
import p4 from '../assets/p4.png'
import p5 from '../assets/p5.png'

const Project = () => {
    return (
        <section id="projects">
            <h1 className='sec3-h1'>My <span>Projects</span></h1>
            <div className='projects-grid'>
                <div className='project' data-aos="zoom-in" onClick={() => window.open("https://github.com/Vishal-Saini-2001/Internal-Task-Tracking-App")}>
                    <img src={p4} alt="Internal Task Tracking App" />
                    <h3><span>Internal Task</span> Tracking App</h3>
                </div>
                <div className='project' data-aos="zoom-in" onClick={() => window.open("https://shareincentivecalculator.com")}>
                    <img src={p3} alt="Share Incentive Plan Calculator" />
                    <h3><span>Share Incentive</span> Plan Calculator </h3>
                </div>
                <div className='project' data-aos="zoom-in" onClick={() => window.open("https://github.com/Vishal-Saini-2001/ResumeBuilder-frontend")}>
                    <img src={p1} alt="Resume Builder" />
                    <h3><span>Resume</span> Builder</h3>
                </div>
                <div className='project' data-aos="zoom-in" onClick={() => window.open("https://github.com/Vishal-Saini-2001/BatchSystem-Vishal")}>
                    <img src={p5} alt="Batch System Project" />
                    <h3><span>Batch</span> System</h3>
                </div>
                <div className='project' data-aos="zoom-in">
                    <img src={p3} alt="Food Ordering Website" />
                    <h3><span>Food</span> Ordering Website</h3>
                </div>
            </div>
        </section>

    )
}

export default Project