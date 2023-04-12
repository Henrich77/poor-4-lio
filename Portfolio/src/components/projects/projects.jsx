import React from "react";
import styled from "styled-components";
import "./projects.scss";
import { motion } from "framer-motion";
import { Tilt } from "react-tilt";
import projects from "../../constants/constants";
import { SocialIcon } from 'react-social-icons';
const Section = styled.div`
  height: 100vh;
  scroll-behavior: smooth;
  scroll-snap-align: center;
`;

const Card = ({ title, description, source, img, live }) => {
  return (
    <div className="card">
      <div>
        <Tilt
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
        >
          <img className="img" src={img} alt="projects" onClick={() => window.open(live, "_blank")} style={{cursor:"pointer"}}/>
        </Tilt>
      </div>
      <div className="info">
        <h2 className="info-h2"><span onClick={() => window.open( source)} style={{cursor:'pointer'}}> <SocialIcon network='github' fgColor="white" bgColor='tranparent'  /></span>{title}</h2>
        <p className="info-p">{description} </p>

     
       
      
      </div>
    </div>
  );
};

function Project() {
  return (
    <Section>
      <h2 id="projects">Projects</h2>

      <>
        <div className="card-container">
          {projects.map((project, index) => (
            <Card key={`project-${index}`} index={index} {...project} />
          ))}
        </div>
      </>
    </Section>
  );
}

export default Project;
