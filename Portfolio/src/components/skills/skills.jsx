import React from 'react'
import styled from 'styled-components'
import './skills.scss'
import { motion } from "framer-motion";


const Section = styled.div`
 height:100vh;
scroll-snap-align: center ;
`
const Skill = ({name,x,y}) => {

  return (
    <motion.div className='motion-skill'   
    whileHover={{ scale:1.05 }}
    initial={{ x: 0, y: 0 }}
    whileInView={{ x: x, y: y, transition: {duration: 1.5} }} >
      {name}
      </motion.div>
  );

};




function Skills() {
  return (
    <div>        

       <Section>
        <h2 className='skills'> Skills </h2>

        <div className='skillsdiv'>

          {/* <motion.div className='skill-motion'> web </motion.div> */}
          
          <Skill name="Vite" x="-24vw" y="30vw" />

        <Skill name="CSS" x="-5vw" y="27vw" />
        <Skill name="JavaScript" x="0vw" y="21vw" />
        <Skill name="ReactJS" x="0vw" y="12vw" />
        <Skill name="NodeJS" x="-20vw" y="15vw" />
        <Skill name="mongoDB" x="15vw" y="3vw" />
        <Skill name="Git" x="-17vw" y="7vw" />
        <Skill name="GraphQL" x="28vw" y="30vw" />
        <Skill name="HTML" x="15vw" y="20vw" />
        <Skill name="Sequelize" x="-43vw" y="18vw" />
        <Skill name="Express JS" x="33vw" y="18vw" />
        <Skill name="Bootstrap" x="33vw" y="10vw" />
        <Skill name="Sass" x="2vw" y="38vw" />


        </div>
        </Section>
     

    
    
   
        
        
        </div>
      
    
  )
}

export default Skills
