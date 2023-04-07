import React from 'react'
import styled from 'styled-components'
import Social from '../nav/nav'
import './navbar.scss'

const Section = styled.div`
height:10vh;
scroll-snap-align: center ;

`

function Navbar() {
  return (
    <div>
   
        <Section>
        <header>
          <nav>

          </nav>
          <h2> Henrich</h2>
          <Social/>
        </header>


        </Section>

      
    </div>
  )
}

export default Navbar
