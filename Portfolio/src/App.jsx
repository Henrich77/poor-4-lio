import { useState } from 'react'
import { useEffect } from 'react'
import * as THREE from 'three'
import './App.css'

function App() {

  useEffect( () => {
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,0.1,1000)
    const canvas = document.getElementById('mycanvas')
const renderer = new THREE.WebGLRenderer({canvas, antialias:true})

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(30)
renderer.render(scene,camera)
document.body.appendChild(renderer.domElement);
  })


  return (
    <div>
     

    
     
    </div>
  )
}

export default App
