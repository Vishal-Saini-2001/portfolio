import React, { useState } from 'react'
import '../css/Contact.css'
import emailjs from '@emailjs/browser';
import img from '../assets/contact.svg'

const Contact = () => {

    const [data, setData] = useState({
        email_id: "",
        message: "",
        from_name: ""
    })

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.send("service_tooasen","template_0gbgsf5", data, {
                    publicKey: '6qZUjMmUcbK_GNRbm',
                })
        .then(()=>{
            alert("Mail Sent Successfully!!")
        })
        .catch(error =>alert(error.text))
        setData({
            email_id: "",
            message: "",
            from_name: ""
        })
       
    };
    return (
        <section id="contact">
            <h1 className='con-h1'><span>Contact</span> me</h1>
            <div className='contact'>
                <div id='image' data-aos="flip-up">
                    <img src={img}></img>
                </div>
                <div id='form' data-aos="zoom-in">
                    <form onSubmit={sendEmail}>
                        <label>Name</label>
                        <input type="text" name="user_name" value={data.from_name} onChange={(e)=>setData({...data,from_name:e.target.value})} required/>
                        <label>Email</label>
                        <input type="email" name="user_email" value={data.email_id} onChange={(e)=>setData({...data,email_id:e.target.value})} required/>
                        <label>Message</label>
                        <textarea name="message" value={data.message} onChange={(e)=>setData({...data,message:e.target.value})} required/>
                        <input type="submit"/>
                    </form>
                </div>
            </div>
        </section>

    )
}

export default Contact