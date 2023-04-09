import { useState } from 'react'
import { useEffect } from 'react'
import * as THREE from 'three'
import styled from "styled-components"
import './App.css'

import Navbar from './components/navbar/navbar'
import Header from './components/header/header'
import Main from './components/main/main'
import Hero from './components/hero/hero'
import Contact from './components/contact/contact'
import Skills from './components/skills/skills'
import Footer from './components/footer/footer'

const AppContainer = styled.div`
height:100vh;
scroll-snap-type: y mandatory;
scroll-behavior : smooth;
overflow-y : auto;
scrollbar-width: none ;
&::-webkit-scrollbar{
  display:none
};
 //background: url("https://user-images.githubusercontent.com/119962472/230741508-1454f38b-0dba-4b67-a0f2-2b3876927dba.png");
background-color: #BFBFBF;
background-size: cover;

`;

function App() {

//   useEffect( () => {
//     const scene = new THREE.Scene()
//     const camera = new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,0.1,1000)
//     const canvas = document.getElementById('mycanvas')
// const renderer = new THREE.WebGLRenderer({canvas, antialias:true})

// renderer.setPixelRatio(window.devicePixelRatio);
// renderer.setSize(window.innerWidth, window.innerHeight);
// camera.position.setZ(30)
// renderer.render(scene,camera)
// document.body.appendChild(renderer.domElement);
//   })


  return (
    <AppContainer>
    
      <Navbar/>
      <Hero/>
      <Header/>
      <Main/>
      <Skills/>
      <Contact/>
      <Footer/>
    
      </AppContainer>
  
  )
}

export default App
