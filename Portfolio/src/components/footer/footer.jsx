import React from 'react'
import './footer.scss'
import styled from 'styled-components'
import { FaRegCopyright } from "react-icons/fa";
import './footer.scss'



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
             <footer>
              <div>
              <p className='footer'> Made with ❤️ by Henrich Tanis</p>
              </div>
              
             </footer>
            </div>


        </Section>

      

  )
}

export default Footer
