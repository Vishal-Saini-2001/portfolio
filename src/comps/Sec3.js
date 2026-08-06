import React, { useEffect, useState } from 'react'
import '../css/Sec3.css';

const Sec3 = () => {
    const [percent, setPercent] = useState([0, 0, 0, 0, 0, 0, 0]);

    useEffect(() => {

        setInterval(() => {
            if (percent[0] < 70)
            setPercent([...percent, percent[0]++])
        }, 60)
        setInterval(() => {
            if (percent[1] <= 80)
            setPercent([...percent, percent[1]++])
        }, 60)
        setInterval(() => {
            if (percent[2] < 70)
            setPercent([...percent, percent[2]++])
        }, 60)
        setInterval(() => {
            if (percent[3] <60)
            setPercent([...percent, percent[3]++])
        }, 60)
        setInterval(() => {
            if (percent[4] < 60)
            setPercent([...percent, percent[4]++])
        }, 60)
        setInterval(() => {
            if (percent[5] < 70)
            setPercent([...percent, percent[5]++])
        }, 60)
        setInterval(() => {
            if (percent[6] < 70)
            setPercent([...percent, percent[6]++])
        }, 60)


    }, [])

    return (
        <section id="skills">
            <h1 id='sec3-h1'>My <span>skills</span></h1>
            <div className='sec3'>
                <div className='skill'data-aos="flip-up">
                    <i class="fa-brands fa-html5"></i>
                    <div id='o-line'>
                        <div data-aos="fade-right" data-aos-duration="2500" id='i-line-1'></div>
                    </div>
                    <h3>{percent[0]}%</h3>
                </div>
                <div className='skill' data-aos="flip-up">
                    <i class="fa-brands fa-css3-alt"></i>
                    <div id='o-line'>
                        <div data-aos="fade-right" data-aos-duration="2500" id='i-line-1'></div>
                    </div>
                    <h3>{percent[1]}%</h3>
                </div>
                <div className='skill' data-aos="flip-up">
                    <i class="fa-brands fa-js"></i>
                    <div id='o-line'>
                        <div data-aos="fade-right" data-aos-duration="2500" id='i-line-2'></div>
                    </div>
                    <h3>{percent[2]}%</h3>
                </div>
                <div className='skill' data-aos="flip-up">
                    <i class="fa-brands fa-react"></i>
                    <div id='o-line'>
                        <div data-aos="fade-right" data-aos-duration="2500" id='i-line-3'></div>
                    </div>
                    <h3>{percent[3]}%</h3>
                </div>
                <div className='skill' data-aos="flip-up">
                    <i class="fa-brands fa-node-js"></i>
                    <div id='o-line'>
                        <div data-aos="fade-right" data-aos-duration="2500" id='i-line-4'></div>
                    </div>
                    <h3>{percent[4]}%</h3>
                </div>
                <div className='skill' data-aos="flip-up">
                    <i class="fa-brands fa-git-alt"></i>
                    <div id='o-line'>
                        <div data-aos="fade-right" data-aos-duration="2500" id='i-line-5'></div>
                    </div>
                    <h3>{percent[5]}%</h3>
                </div>
                <div className='skill' data-aos="flip-up">
                    <i class="fa-solid fa-c"></i>
                    <div id='o-line'>
                        <div data-aos="fade-right" data-aos-duration="2500" id='i-line-6'></div>
                    </div>
                    <h3>{percent[6]}%</h3>
                </div>
                <div className='skill' data-aos="flip-up">
                    <i class="fa-solid fa-people-group"></i>
                    <div>
                        Good Team Management
                    </div>
                </div>
                <div className='skill' data-aos="flip-up">
                    <i class="fa-solid fa-business-time"></i>
                    <div>
                        Effective Time Management
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Sec3