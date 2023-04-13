import React from 'react'

import Nav from 'react-bootstrap/Nav';
import ReactDOM from 'react-dom';
import { SocialIcon } from 'react-social-icons';
import { motion } from "framer-motion";
import './nav.scss'


function Social() {
  return (
    <Nav defaultActiveKey="/home" as="ul" className='nav'>
    <Nav.Item as="li">
      <Nav.Link href="/home">
        <motion.li 
        whileHover={{ y: 5 }}
        whileTap={{ scale: 0.9 }}>
      <SocialIcon url='https://Github.com/Henrich77' network='github' fgColor="black" bgColor='#E79AA2'  style={{ height: 70, width: 70 }}/>
      </motion.li>
      </Nav.Link>
    </Nav.Item>
    <Nav.Item as="li">
      <Nav.Link href="https://www.linkedin.com/in/henrich-tanis-723a43172/">
        <motion.li whileHover={{ y: 5 }}
            whileTap={{ scale: 0.9 }}>
      <SocialIcon url='https://www.linkedin.com/in/henrich-tanis-723a43172/' fgColor="black" bgColor='#E79AA2'  style={{ height: 70, width: 70 }}/>
      </motion.li>
      </Nav.Link>
    </Nav.Item>
    <Nav.Item as="li">
      <Nav.Link href="mailto:henrichtanis@gmail.com">
        <motion.li whileHover={{ y: 5 }}
            whileTap={{ scale: 0.9 }}>
      <SocialIcon url='mailto:henrichtanis@gmail.com' network='mailto' fgColor="black" bgColor='#E79AA2' style={{ height: 70, width: 70 }} />
      </motion.li>
      </Nav.Link>
    </Nav.Item>
  </Nav>
  )
}

export default Social
