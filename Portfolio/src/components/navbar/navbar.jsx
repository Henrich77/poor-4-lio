import React from "react";
import styled from "styled-components";
import Social from "../nav/nav";
import "./navbar.scss";
import Dropdown from 'react-bootstrap/Dropdown';

import NavLink from "react-bootstrap/esm/NavLink";
import { motion } from "framer-motion";
import { SocialIcon } from 'react-social-icons';
import { useState } from "react";

const Section = styled.div`
  height: 10vh;
  scroll-behavior: smooth;
  scroll-snap-align: center;
  @media only screen and (max-width: 768px) {
    width: 100%;
  }
  //position:sticky;
  //top: 0 ;
`;
const Link = styled.a`
  text-decloration: none;
  color: inherit;
  font-weight: bold;
  @media only screen and (max-width: 768px) {
   font-size: 2rem;
  }
`;

function Navbar() {
const [isOpen,setIsOpen] = useState(false)

const clickBurger = () => {

  setIsOpen(!isOpen)

  

}

  return (
    <Section>

    
      <header>
      {/* <button className="burger" onClick={clickBurger}>
        <span className={`burger1 ${isOpen ? 'transform-rotate-45deg transform-translateY-0.125rem;': 'transform-translateY-0.125rem;' }`}></span>
        <span className={`burger2 ${isOpen ? 'opacity-0':'opacity-100'}`} ></span>
        <span className={`burger3 ${isOpen ? 'transform-rotate-45deg, transform-translateY-0.25rem':'transform-translateY-0.25rem' } `}></span>
      </button> */}
       <Dropdown >
      <Dropdown.Toggle className="burger" style={{backgroundColor:'transparent', border:'none'}}>
        <span className="burger1"></span>
        <span className="burger2"></span>
        <span className="burger3"></span>
       
      </Dropdown.Toggle>

      <Dropdown.Menu className="menu">
      <motion.li whileHover={{ y: 5 }} whileTap={{ scale: 0.9 }}>
              <Link href="#projects"> Projects</Link>{" "}
            </motion.li>
            <motion.li whileHover={{ y: 5 }} whileTap={{ scale: 0.9 }}>
              <Link href="#about"> About</Link>
            </motion.li>
            <motion.li whileHover={{ y: 5 }} whileTap={{ scale: 0.9 }}>
              <Link href="#contact"> Contact </Link>
            </motion.li>
            <SocialIcon
                url="mailto:henrichtanis@gmail.com"
                network="mailto"
                fgColor="white"
                bgColor="black"
                style={{ height: 60, width: 60,margin:'5px 0px 5px 0px' }}
              />
               <SocialIcon
                url="https://www.linkedin.com/in/henrich-tanis-723a43172/"
                fgColor="white"
                bgColor="black"
                style={{ height: 60, width: 60, }}
              />
               <SocialIcon
                url="https://Github.com/Henrich77"
                network="github"
                fgColor="white"
                bgColor="black"
                style={{ height: 60, width: 60, margin:'5px 0px 5px 0px'}}
              />


      </Dropdown.Menu>
    </Dropdown>
        <nav className="navigate">
          <ul >
            <motion.li whileHover={{ y: 5 }} whileTap={{ scale: 0.9 }}>
              <Link href="#projects"> Projects</Link>{" "}
            </motion.li>
            {/* </Link> */}
            <motion.li whileHover={{ y: 5 }} whileTap={{ scale: 0.9 }}>
              <Link href="#about"> About</Link>
            </motion.li>
            <motion.li whileHover={{ y: 5 }} whileTap={{ scale: 0.9 }}>
              <Link href="#contact"> Contact </Link>
            </motion.li>
          </ul>
        </nav>
        <motion.div whileHover={{ x: -5, y: 5 }}>
          <img
            className="img"
            src="https://user-images.githubusercontent.com/119962472/230747371-4fb86493-a3a1-4d1a-8c79-391bb25ef7c3.png"
            alt="logo"
          />
        </motion.div>
        <nav className="navigate">
          <ul>
            <motion.li whileHover={{ y: 5 }} whileTap={{ scale: 0.9 }}>
              <SocialIcon
                url="https://Github.com/Henrich77"
                network="github"
                fgColor="black"
                bgColor="#E79AA2"
                style={{ height: 60, width: 60 }}
              />
            </motion.li>
            <motion.li whileHover={{ y: 5 }} whileTap={{ scale: 0.9 }}>
              <SocialIcon
                url="https://www.linkedin.com/in/henrich-tanis-723a43172/"
                fgColor="black"
                bgColor="#E79AA2"
                style={{ height: 60, width: 60 }}
              />
            </motion.li>
            <motion.li whileHover={{ y: 5 }} whileTap={{ scale: 0.9 }}>
              <SocialIcon
                url="mailto:henrichtanis@gmail.com"
                network="mailto"
                fgColor="black"
                bgColor="#E79AA2"
                style={{ height: 60, width: 60 }}
              />
            </motion.li>
          </ul>
        </nav>

        {/* <Social/> */}
      </header>
    </Section>
  );
}

export default Navbar;
