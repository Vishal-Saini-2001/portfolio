import React, { useEffect, useState } from 'react'
import '../css/Sec3.css';

const Sec3 = () => {
    const [percent, setPercent] = useState([0, 0, 0, 0, 0, 0, 0]);

    useEffect(() => {
        const targets = [70, 80, 70, 60, 60, 70, 70];

        const interval = setInterval(() => {
            setPercent(prevPercent => {
                let isFinished = true;
                const nextPercent = prevPercent.map((val, index) => {
                    if (val < targets[index]) {
                        isFinished = false;
                        return val + 1;
                    }
                    return val;
                });

                if (isFinished) {
                    clearInterval(interval);
                    return prevPercent;
                }

                return nextPercent;
            });
        }, 30);

        return () => clearInterval(interval);
    }, []);
    return (
        <section id="skills">
            <h1 id='sec3-h1'>My <span>skills</span></h1>
            <div className='sec3'>
                <div className='skill' data-aos="flip-up">
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