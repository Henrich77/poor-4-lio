import React from "react";
import styled from "styled-components";
import Social from "../nav/nav";
import "./navbar.scss";

import NavLink from "react-bootstrap/esm/NavLink";
import { motion } from "framer-motion";
import { SocialIcon } from 'react-social-icons';

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
`;

function Navbar() {
  return (
    <Section>

    
      <header>
      <button className="burger">
        <span style={{transform:'translateY(-0.125rem)',backgroundColor:'black', display:'block',borderRadius:'.5rem', height:'0.125rem', width:'1.5rem'}}></span>
        <span style={{backgroundColor:'black', display:'block',borderRadius:'.5rem', height:'0.125rem', width:'1.5rem',marginTop:"0.125rem",marginBottom:'0.125rem'}}></span>
        <span style={{transform:'translateY(0.125rem)',backgroundColor:'black', display:'block',borderRadius:'.1rem', height:'0.125rem', width:'1.5rem'}}></span>
      </button>
        <nav>
          <ul>
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
        <nav>
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
