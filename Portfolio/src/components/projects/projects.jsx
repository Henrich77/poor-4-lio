import React from 'react'
import styled from 'styled-components'
import './projects.scss'
import {motion} from 'framer-motion'
import { Tilt } from 'react-tilt'

const Section = styled.div`
height:100vh;
scroll-behavior : smooth;
scroll-snap-align: center ;
`
const Card = (
  title,
  description,
  source,
  img,
) =>{ 
  return (
    <div>

        <div className="card">
        <div>
            <img className='img' src={img}/>
        </div>
        <div className="info">
            <h2> {title}</h2>
            <p>{description}</p>
          <div></div>
        </div>
      </div>
      
    </div>
  )


}

function Main() {
  return (
    <div>
        <Section> 
          <h2 id='projects'> Projects </h2> 
          
          </Section>
      
    </div>
  )
}

export default Main
