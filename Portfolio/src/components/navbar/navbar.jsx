import React from 'react'
import styled from 'styled-components'
import Social from '../nav/nav'
import './navbar.scss'
import NavLink from 'react-bootstrap/esm/NavLink'

const Section = styled.div`
height:10vh;
scroll-snap-align: center ;
position:sticky;
top: 0 ;

`

function Navbar() {
  return (

   
        <Section>
        <header>
          <nav>
            {/* <NavLink> Home </NavLink>
            <NavLink> About </NavLink>
            <NavLink> Projects </NavLink>
        */}

          </nav>
          <h2> Henrich&nbsp;&nbsp;&nbsp;Tanis</h2> 

          <Social/>
        </header>


        </Section>

      
   
  )
}

export default Navbar
