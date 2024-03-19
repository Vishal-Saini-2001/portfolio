import React from 'react'
import '../css/Project.css'
import p1 from '../assets/p1.png'
import p2 from '../assets/p2.png'
import p3 from '../assets/p3.png'
import p4 from '../assets/p4.jpg'

const Project = () => {
    return (
        <>
            <h1 className='sec3-h1'>My <span>Projects</span></h1>
            <div className='sec3'>
                <div className='project' data-aos="zoom-in">
                    <img src={p1} />
                    <h3><span>Resume</span> Builder</h3>
                </div>
                <div className='project' data-aos="zoom-in">
                    <img src={p2} />
                    <h3><span>Shoe</span> Store</h3>
                </div>
                <div className='project' data-aos="zoom-in">
                    <img src={p3} />
                    <h3><span>Food</span> Ordering Website</h3>
                </div>
                <div className='project' data-aos="zoom-in">
                    <img src={p4} />
                    <h3><span>QR</span> Code Generator</h3>
                </div>
            </div>
        </>

    )
}

export default Project