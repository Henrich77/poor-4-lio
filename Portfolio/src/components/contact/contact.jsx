
import styled from 'styled-components'
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './contact.scss'

const Section = styled.div`
height:100vh;
scroll-snap-align: center ;
//background-image: url('https://user-images.githubusercontent.com/119962472/230750434-8ecc0b18-552d-43fc-95a5-a7faa22b0d1d.png' ) ;
//background-size: cover;
`

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_n6k4xdb', 'template_0yeicik', form.current, 'F0mLMHcKDkhGNpHks')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (

    <Section>
      <h2> Contact me </h2>
      <div className='contactdiv'>
      <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
      </form>
    </div>
    </Section>
  );
};

export default Contact
