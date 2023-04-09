
import styled from 'styled-components'
import React, { useRef,Suspense } from 'react';
import { OrbitControls } from "@react-three/drei";
import emailjs from '@emailjs/browser';
import './contact.scss'
import Cube from '../cube/cube';
import { Canvas } from '@react-three/fiber';
import Footer from '../footer/footer';

// const Section = styled.div`
// height:100vh;
// scroll-snap-align: center ;
// //background-image: url('https://user-images.githubusercontent.com/119962472/230750434-8ecc0b18-552d-43fc-95a5-a7faa22b0d1d.png' ) ;
// //background-size: cover;
// `

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  //display: flex;
  //justify-content: center;
`;

const Container = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  width: 1400px;
  display: flex;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 1;
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const Title = styled.h1`
  font-size: 50px;
  @media only screen and (max-width: 768px) {
    text-align: center;
  }
`;



const Button = styled.button`
  background-color: #E79AA2;
  color: black;
  font-weight: 500;
  width: 300px;
  padding: 10px;
  border: none;
  border-radius: 2rem;
  cursor: pointer;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  @media only screen and (max-width: 768px) {
    align-items: center;
    text-align: center;
  }
`;

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
      form.current.reset()
  };

  return (

    <Section>
      <h2 id='contact'> Contact me </h2>
      <Container>
      <Right>
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
    </Right>
    
        <Left>
          <Canvas camera={{ position: [5, 5, 5], fov: 25 }}>
            <Suspense fallback={null}>
              <ambientLight intensity={0.5} />
              <directionalLight position={[3, 2, 1]} />
              <Cube />
              <OrbitControls enableZoom={false} autoRotate />
            </Suspense>
          </Canvas>
        </Left>
        </Container>
        <Footer/>
    </Section>
  );
};

export default Contact
