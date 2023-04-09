import React, { Suspense } from "react";
import styled from "styled-components";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";
import "./hero.scss";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  @media only screen and (max-width: 768px) {
    height: 200vh;
  }
`;

const Container = styled.div`
  height: 100%;
  scroll-snap-align: center;
  width: 1400px;
  display: flex;
  justify-content: space-between;
  @media only screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const Left = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  @media only screen and (max-width: 768px) {
    flex: 1;
    align-items: center;
  }
`;

const Title = styled.h1`
  font-size: 2.3rem;
  font-family: "Frijole", cursive;
  @media only screen and (max-width: 768px) {
    text-align: center;
    font-family: "Frijole", cursive;
  }
`;

const Button = styled.button`

  background-color: #e79aa2;
  color: black;
  font-weight: bold;
  width: 10rem;
  padding: 10px;
  border: none;
  cursor: pointer;
  font-family: Arial, Helvetica, sans-serif;
`;

const Right = styled.div`
  flex: 2;
  position: relative;
  @media only screen and (max-width: 768px) {
    flex: 1;
    width: 100%;
  }
`;
const Summary = styled.p`
  font-size: 1 rem;
`;

const Img = styled.img`
  border-radius: 50%;
  object-fit: cover;
  margin-right: 3vw;
  width: 300px;
  height: 300x;
  object-fit: contain;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  animation: animate 3s infinite ease alternate;
  @media only screen and (max-width: 768px) {
    width: 300px;
    height: 300px;
  }
  @keyframes animate {
    to {
      transform: translateY(20px);
    }
  }
  
`;
const Link= styled.a`
text-decloration:none;
color:inherit;
font-weight: bold;
`;

function Hero() {
  return (
    <Section>
      <Container>
        <Left>
          <Title> Welcome to my Portfolio! </Title>
          <Summary>
            {" "}
             As a software developer,
            I am passionate about creating elegant and efficient solutions to
            complex problems. My portfolio showcases my skills and experience in
            developing high-quality software that meets the needs of businesses
            and individuals. I believe that the best software is not only
            functional and reliable, but also user-friendly and visually
            appealing. In my portfolio, you will find a range of projects that
            demonstrate my ability to create software that is both functional
            and aesthetically pleasing. Thank you for taking the time to view my
            portfolio. I look forward to the opportunity to work with you.
          </Summary>

         <Link href="https://github.com/Henrich77/poor-4-lio/files/11186264/Henrich.Tanis.----.Resume.pdf" target={"_blank"}  download={true}><Button> Resume</Button></Link>
        </Left>
        <Right>
          <Canvas>
            <Suspense fallback={null}>
              <OrbitControls enableZoom={false} />
              <ambientLight intensity={0.5} />
              <directionalLight position={[6, 2, 5]} />
              <Sphere args={[1, 100, 200]} scale={2.14}>
                <MeshDistortMaterial
                  color="#E79AA2"
                  attach="material"
                  distort={0.5}
                  speed={3}
                />
              </Sphere>
            </Suspense>
          </Canvas>
          <Img src="https://user-images.githubusercontent.com/119962472/230529364-b95c4682-d9de-4897-86f8-451b0da0f078.png" />
        </Right>
      </Container>
    </Section>
  );
}

export default Hero;
