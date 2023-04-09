import React from 'react'
import styled from 'styled-components'
import './about.scss'

const Section = styled.div`
height:100vh;
scroll-behavior : smooth;
scroll-snap-align: center ;
`

function Header() {
  return (
    <div>
        <Section> 
          <h2 id='about'> About Me </h2>
             </Section>
      
    </div>
  )
}

export default Header
