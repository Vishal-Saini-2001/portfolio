import React from 'react'
import resume from './MyCV.pdf';
import { Position, Worker } from '@react-pdf-viewer/core';
import { Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';

const Resume = () => {

    const downloadBtnStyle = {
        backgroundColor:"#443266",
        padding:"7px 15px",
        color:"white",
        border:"none",
        fontSize:"18px",
        position:"absolute",
        left:"45%"
    }

    return (
        <>
            <br/>
            <a href={resume} download="VishalSainiCV">
                <button type='button' style={downloadBtnStyle}>Download <i class="fa fa-download"></i></button>
            </a>
            <br/>
            <br/>
            <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
                <Viewer fileUrl={resume} />
            </Worker>
        </>
    )
}

export default Resume