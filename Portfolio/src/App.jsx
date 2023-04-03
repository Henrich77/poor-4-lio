import { useState } from 'react'
import { useEffect } from 'react'
import * as THREE from 'three'
import './App.css'

function App() {

  useEffect( () => {
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,0.1,1000)
const renderer = new THREE.WebGLRenderer({canvas:document.querySelector('#mycanvas')})

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(30)
renderer.render(scene,camera)
  })


  return (
    <div>
     
      <canvas id='mycanvas'/>
    
     
    </div>
  )
}

export default App
