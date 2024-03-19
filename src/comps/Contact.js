import React, { useRef, useState } from 'react'
import '../css/Contact.css'
import emailjs from '@emailjs/browser';
import img from '../assets/contact.svg'

const Contact = () => {

    const form = useRef();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [msg, setMsg] = useState("");

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_tooasen', 'template_0gbgsf5', form.current, {
                publicKey: '6qZUjMmUcbK_GNRbm',
            })
            .then(
                () => {
                    alert('MAIL SENT SUCCESSFULLY!');
                    setEmail("");
                    setName("");
                    setMsg("")
                },
                (error) => {
                    alert('FAILED...', error.text);
                    setEmail("");
                    setName("");
                    setMsg("")
                },
            );
    };
    return (
        <>
            <h1 className='con-h1'><span>Contact</span> me</h1>
            <div className='contact'>
                <div id='image' data-aos="flip-up">
                    <img src={img}></img>
                </div>
                <div id='form' data-aos="zoom-in">
                    <form ref={form} onSubmit={sendEmail}>
                        <label>Name</label>
                        <input type="text" name="user_name" value={name} onChange={(e)=>setName(e.target.value)} required/>
                        <label>Email</label>
                        <input type="email" name="user_email" value={email} onChange={(e)=>setEmail(e.target.value)} required/>
                        <label>Message</label>
                        <textarea name="message" value={msg} onChange={(e)=>setMsg(e.target.value)} required/>
                        <input type="submit" value="Send" />
                    </form>
                </div>
            </div>
        </>

    )
}

export default Contact