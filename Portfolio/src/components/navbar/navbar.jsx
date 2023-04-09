import React from 'react'
import styled from 'styled-components'
import Social from '../nav/nav'
import './navbar.scss'


import NavLink from 'react-bootstrap/esm/NavLink'
import { motion } from "framer-motion";

const Section = styled.div`
height:10vh;
scroll-snap-align: center ;
//position:sticky;
//top: 0 ;

`
const Link= styled.a`
text-decloration:none;
color:inherit;
font-weight: bold;
`

function Navbar() {
  return (

   
        <Section>
          
        <header>
          <nav>
          <ul>
  
           <motion.li whileHover={{ y: 5 }}
            whileTap={{ scale: 0.9 }}><Link href='#projects'> Projects</Link> </motion.li>
            {/* </Link> */}
            <motion.li  whileHover={{ y: 5 }}
            whileTap={{ scale: 0.9 }}><Link href='#about'> About</Link></motion.li>
            <motion.li  whileHover={{ y: 5 }}
            whileTap={{ scale: 0.9 }}><Link href='#contact'> Contact </Link></motion.li>
          </ul>

          </nav>
          <img className='img' src='https://user-images.githubusercontent.com/119962472/230747371-4fb86493-a3a1-4d1a-8c79-391bb25ef7c3.png' alt='logo'/>

          <Social/>
        </header>


        </Section>

      
   
  )
}

export default Navbar
