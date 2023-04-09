import React from 'react'
import {motion, useScroll} from "framer-motion"
import './circle.scss'



function Circle( {reference}) {
 
 
  const {scrollYProgress} = useScroll(
    {
        target: reference,
        offset: ["center end", "center center"]
    }
)

  return (
    <div>
      <figure className='figure'>
        <svg className='svg'>
          <circle className='circle1'/>
          <motion.circle className={'motionCirlce'}/>
          <circle className='circle2'/>
        </svg>
      </figure>
      
    </div>
  )
}

export default Circle