import React from 'react'
import styled from 'styled-components'
import Social from '../nav/nav'

const Section = styled.div`
height:10vh;
scroll-snap-align: center ;
background-color: grey;
`

function Navbar() {
  return (
    <div>
      <Social/>
        <Section>
        <div> Navbar </div>


        </Section>

      
    </div>
  )
}

export default Navbar
