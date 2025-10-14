import React from "react";
import styled from "styled-components";
import { Bio } from "../../data/constants";
import Typewriter from "typewriter-effect";
import HeroImg from "../../images/HeroImage.jpg";
import HeroBgAnimation from "../HeroBgAnimation";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import {
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
} from "../../utils/motion";
import StarCanvas from "../canvas/Stars";

const HeroContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 80px 30px;
  max-width: 1200px;
  margin: 0 auto;
  overflow: hidden;
  min-height: auto;

  @media (max-width: 960px) {
    flex-direction: column;
    padding: 60px 20px;
    align-items: center;
    min-height: auto;
  }

  @media (max-width: 640px) {
    padding: 40px 16px;
    min-height: auto;
  }
`;

const HeroInnerContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1100px;
  gap: 40px;

  @media (max-width: 960px) {
    flex-direction: column;
    gap: 30px;
  }

  @media (max-width: 640px) {
    gap: 20px;
  }
`;

const HeroLeftContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media (max-width: 960px) {
    width: 100%;
    text-align: center;
    gap: 16px;
  }
`;

const HeroRightContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 960px) {
    width: 100%;
    order: -1;
  }
`;

const Title = styled.div`
  font-weight: 700;
  font-size: 50px;
  color: ${({ theme }) => theme.text_primary};
  line-height: 68px;
  text-align: left;

  @media (max-width: 960px) {
    font-size: 36px;
    line-height: 48px;
    text-align: center;
  }

  @media (max-width: 640px) {
    font-size: 28px;
    line-height: 38px;
  }
`;

const TextLoop = styled.div`
  font-weight: 600;
  font-size: 32px;
  display: flex;
  gap: 12px;
  color: ${({ theme }) => theme.text_primary};
  line-height: 1.2;
  min-height: 45px;
  text-align: left;
  flex-wrap: wrap;

  @media (max-width: 960px) {
    justify-content: center;
    text-align: center;
    font-size: 24px;
    min-height: 35px;
  }

  @media (max-width: 640px) {
    font-size: 20px;
    min-height: 30px;
  }
`;

const Span = styled.div`
  cursor: pointer;
  color: ${({ theme }) => theme.primary};
`;

const SubTitle = styled.div`
  font-size: 20px;
  line-height: 32px;
  color: ${({ theme }) => theme.text_primary + 95};
  text-align: left;

  @media (max-width: 960px) {
    text-align: center;
    font-size: 16px;
    line-height: 28px;
  }

  @media (max-width: 640px) {
    font-size: 14px;
    line-height: 24px;
  }
`;

const ResumeButton = styled.a`
  -webkit-appearance: button;
  -moz-appearance: button;
  appearance: button;
  text-decoration: none;
  width: fit-content;
  padding: 16px 32px;
  background: hsla(271, 100%, 50%, 1);
  background: linear-gradient(
    225deg,
    hsla(271, 100%, 50%, 1) 0%,
    hsla(294, 100%, 50%, 1) 100%
  );
  box-shadow: 20px 20px 60px #1f2634, -20px -20px 60px #1f2634;
  border-radius: 50px;
  font-weight: 600;
  font-size: 20px;
  color: white;
  transition: all 0.4s ease-in-out;

  &:hover {
    transform: scale(1.05);
    filter: brightness(1.1);
  }

  @media (max-width: 960px) {
    align-self: center;
  }

  @media (max-width: 640px) {
    padding: 12px 24px;
    font-size: 16px;
  }
`;

const ImgContainer = styled.div`
  width: 100%;
  max-width: 400px;
  height: 60%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 960px) {
    max-width: 300px;
    width: 300px;
    height: 300px;
  }

  @media (max-width: 640px) {
    max-width: 250px;
    width: 250px;
    height: 250px;
  }
`;

const Img = styled.img`
  border-radius: 50%;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top center; /* <-- adjust this */

  border: 2px solid ${({ theme }) => theme.primary};
`;

const TypewriterBox = styled.div`
  display: inline-block;
  min-width: 150px;
  height: auto;
  overflow: hidden;

  @media (max-width: 640px) {
    min-width: 120px;
  }
`;

const slideInVariants = (direction = "left") => ({
  hidden: { x: direction === "left" ? -100 : 100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      ease: "easeOut",
    },
  },
});

const Hero = () => {
  return (
    <div id="about">
      <HeroContainer>
        <HeroInnerContainer>
          <HeroLeftContainer>
            <motion.div
              variants={slideInVariants("right")}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
            >
              <Title>
                Hi! I'm <br /> {Bio.name}
              </Title>
            </motion.div>

            <TextLoop>
              A
              <Span>
                <TypewriterBox>
                  <Typewriter
                    options={{
                      strings: Bio.roles,
                      autoStart: true,
                      loop: true,
                    }}
                  />
                </TypewriterBox>
              </Span>
            </TextLoop>

            <motion.div
              variants={slideInVariants("left")}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
            >
              <SubTitle>{Bio.description}</SubTitle>
            </motion.div>

            <motion.div {...headContainerAnimation}>
              <ResumeButton href={Bio.resume} target="_blank">
                Check Resume
              </ResumeButton>
            </motion.div>
          </HeroLeftContainer>

          <HeroRightContainer>
            <Tilt>
              <ImgContainer>
                <Img src={HeroImg} alt="Hero" />
              </ImgContainer>
            </Tilt>
          </HeroRightContainer>
        </HeroInnerContainer>
      </HeroContainer>
    </div>
  );
};

export default Hero;
