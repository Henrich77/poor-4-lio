import React from 'react'

import Nav from 'react-bootstrap/Nav';
import ReactDOM from 'react-dom';
import { SocialIcon } from 'react-social-icons';


function Social() {
  return (
    <Nav defaultActiveKey="/home" as="ul">
    <Nav.Item as="li">
      <Nav.Link href="/home">  
      <SocialIcon url='https://Github.com/Henrich77' network='github' fgColor="black" bgColor='#E79AA2'  style={{ height: 70, width: 70 }}/>
      </Nav.Link>
    </Nav.Item>
    <Nav.Item as="li">
      <Nav.Link href="https://www.linkedin.com/in/henrich-tanis-723a43172/">
      <SocialIcon url='https://www.linkedin.com/in/henrich-tanis-723a43172/' fgColor="black" bgColor='#E79AA2'  style={{ height: 70, width: 70 }}/>
      </Nav.Link>
    </Nav.Item>
    <Nav.Item as="li">
      <Nav.Link href="mailto:henrichtanis@gmail.com">
      <SocialIcon url='mailto:henrichtanis@gmail.com' network='mailto' fgColor="black" bgColor='#E79AA2' style={{ height: 70, width: 70 }} />
      </Nav.Link>
    </Nav.Item>
  </Nav>
  )
}

export default Social
