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
      <figure>
        <svg >
          <circle />
          <motion.circle className={'motioncircle'}  
          style={{pathLength : scrollYProgress }}/>
          <circle className='circle2'/>
        </svg>
      </figure>
      
    </div>
  )
}

export default Circle