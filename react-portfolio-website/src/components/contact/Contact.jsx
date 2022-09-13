import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {AiOutlineMessage} from 'react-icons/ai'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form =useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_wotewde', 'template_3lt03fu', form.current, 'IWSy8oa4-RDBBPTro')
      e.target.reset()
  };
  return (
    <section id='contact'>
      <div className='contact__header'>
        <h5>Get In Touch</h5>
        <h2>Contact Me</h2>
      </div>

      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>alexandrawenner05@gmail.com</h5>
            <a href='mailto:alexandrawenner05@gmail.com' target='_blank'>Send an Email</a>
          </article>

          <article className='contact__option'>
            <AiOutlineMessage className='contact__option-icon'/>
            <h4>LinkedIn</h4>
            <h5>alexandra-wenner</h5>
            <a href='https://www.linkedin.com/in/alexandra-wenner/' target='_blank'>Send a message</a>
          </article>
        </div>
        {/*END OF CONTACT OPTIONS*/}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required/>
          <input type="email" name='email' placeholder='Your Email' required/>
          <textarea name='message' rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact