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

const AppContainer = styled.div`
height:100vh;
scroll-snap-type: y mandatory;
scroll-behavior : smooth;
overflow-y : auto;
scrollbar-width: none ;
&::-webkit-scrollbar{
  display:none
};
// background: url("https://wallpapershome.com/images/wallpapers/3d-1920x1080-4k-hd-wallpaper-yellow-blue-orange-background-254.jpg");
background-color: darkgrey;
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
      <Header/>
      <Hero/>
      <Main/>
      <Contact/>
      </AppContainer>
  
  )
}

export default App
