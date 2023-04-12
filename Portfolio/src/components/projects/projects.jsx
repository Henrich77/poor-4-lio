import React from "react";
import styled from "styled-components";
import "./projects.scss";
import { motion } from "framer-motion";
import {Tilt} from "react-tilt";
import projects from "../constants/constants";

const Section = styled.div`
  height: 100vh;
  scroll-behavior: smooth;
  scroll-snap-align: center;
`;

const Card = ({ title, description, source, img }) => {
  return (
    
   
      <div className="card">
        <Tilt
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
        >
          <div>
            <img className="img" src={img} alt="projects" />
          </div>
          <div className="info">
            <h2 className="info-h2"> {title}</h2>
            <p className="info-p">{description}</p>
            <div></div>
          </div>
        </Tilt>
      </div>
   
  );
};

function Project() {
  return (
    <Section>

      <h2 id="projects">Projects</h2>
   
      <>
      <div  className="card-container">
   
        {projects.map((project, index) => (
          <Card key={`project-${index}`} index={index} {...project} />
        ))}
        </div>
      
      </>

      </Section>
  
  );
}

export default Project;
