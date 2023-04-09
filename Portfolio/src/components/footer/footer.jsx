import React from 'react'
import './footer.scss'
import styled from 'styled-components'

const Section = styled.div`
height:8vh;
scroll-behavior : smooth;
scroll-snap-align: center ;
border-top: 2px solid black;
`

function Footer() {
  return (
    
        <Section>
            <div> 
                <h2 className='footer-header'> Footer </h2>
            </div>


        </Section>

      

  )
}

export default Footer
