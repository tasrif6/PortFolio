import React from "react";
import styled from "styled-components";
import { name } from './../../../node_modules/react-router-dom/dist/index';
import { Bio } from "../../data/constants";
import Typewriter from "typewriter-effect";
import HeroImg from "../../images/HeroImage.jpg";
import HeroBgAnimation from "../HeroBgAnimation";
import Tilt  from "react-parallax-tilt";
import { motion } from "framer-motion";
import { headContainerAnimation, headContentAnimation, headTextAnimation } from "../../utils/motion";
import StarCanvas from "../canvas/Stars";

const HeroContainer = styled.div`
    display: flex;
    justify-content: center;
    position: relative;
    padding: 80px 30px;
    z-index: 1;
    @media (max-width: 960px){
        padding: 66px 16px;
    }
    @media (max-width: 640px){
        padding: 32px 16px;
    }
    clip-path: polygon (0 0, 100% 0, 100% 100%, 70% 95%, 0 100%)
`;
const HeroInnerContainer = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 1100px;
    @media (max-width: 960px){
        flex-directin: column
    }
`;
const HeroLeftContainer = styled.div`
    width: 100%;
    order: 1;
    @media (max-width: 960px){
        order: 2;
        margin-bottom: 30px;
        display: flex;
        gap: 6px;
        flex-direction: column;
        align-items: center;
    }
`;
const HeroRightContainer = styled.div`
    width: 100%;
    order: 2;
    display: flex;
    justify-content: end;
    @media (max-width: 960px){
        order: 2;
        margin-bottom: 30px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-contents: center;
        margin-bottom: 80px;
    }
    @media (max-width: 640px) {
        margin-bottom: 30px;
    }
`;

const Title = styled.div`
    font-weight: 700px;
    font-size: 50px;
    color: ${({ theme }) => theme.text_primary};
    line-height: 68px;

    @media (max-width: 960px;
        text-align: center;)

    @media (max-width: 960px){
        font-size: 40px;
        line-height: 8px;
    }
`;
const TextLoop = styled.div`
    font-weight: 600px;
    font-size: 32px;
    display: flex;
    gap: 12px;
    color: ${({ theme }) => theme.text_primary};
    line-height: 68px;

    @media (max-width: 960px;
        text-align: center;)

    @media (max-width: 960px){
        font-size: 40px;
        line-height: 8px;
    }
`;
const Span = styled.div`
    cursor:pointer;
    color: ${({ theme }) => theme.primary};
    }
`;
const SubTitle = styled.div`
    font-size: 20px;
    line-height: 32px;
    margin-bottom: 42px;
    color: ${({ theme }) => theme.text_primary + 95 }
    
    @media (max-width: 960px) {
        text-align: center;
    }

    @media (max-width: 960px) {
        font-size: 16px;
        line-height: 32px;
  }
`;
const ResumeButton = styled.a`
     -webkit-appearance: button;
  -moz-appearance: button;
  appearance: button;
  text-decoration: none;

  width: 95%;
  max-width: 300px;
  text-align: center;
  padding: 16px 0;

  background: hsla(271, 100%, 50%, 1);
  background: linear-gradient(
    225deg,
    hsla(271, 100%, 50%, 1) 0%,
    hsla(294, 100%, 50%, 1) 100%
  );
  background: -moz-linear-gradient(
    225deg,
    hsla(271, 100%, 50%, 1) 0%,
    hsla(294, 100%, 50%, 1) 100%
  );
  background: -webkit-linear-gradient(
    225deg,
    hsla(271, 100%, 50%, 1) 0%,
    hsla(294, 100%, 50%, 1) 100%
  );
  box-shadow: 20px 20px 60px #1f2634, -20px -20px 60px #1f2634;
  border-radius: 50px;
  font-weight: 600;
  font-size: 20px;
     &:hover {
        transform: scale(1.05);
    transition: all 0.4s ease-in-out;
    box-shadow:  20px 20px 60px #1F2634,
    filter: brightness(1);
    }    
    
    
    @media (max-width: 640px) {
        padding: 12px 0;
        font-size: 18px;
    } 
    color: white;
`

const Img = styled.img`
    border-radius: 50%;
    width: 100%;
    height: 100%;
    max-width: 400px;
    border: 2px solid $ {({ theme }) => theme.primary};

    @media (max-width: 640px) {
        padding: 280px;
        font-size: 280px;
    } 
`;
const HeroBg =styled.div`
    position: absolute;
    display: flex;
    top: 0;
    right: 0;
    bottom: 0;
    left: 50%;
    width:100%;
    height: 100%;
    max-width: 1360px;
    justify-content: end;
    -webkit-trnsform: translatex (-50%) translateY(-50%);
    transform: translateX(-50%) translateY(-50%);

    @media (max-width: 960px) {
    justify-content: center;
    padding: 0 0px;
    } 
`;
const slideInVariants = (direction = "left") => ({
  hidden: { x: direction === "left" ? -100 : 100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 2, // smooth transition duration
      ease: "easeOut",
    },
  },
});

const Hero = () => {
  return (
    <div id="about"> 
        <HeroContainer>
            <HeroBg>
                <StarCanvas/>
                <HeroBgAnimation />

            </HeroBg>
                    <HeroInnerContainer>
                        <HeroLeftContainer>
                            <motion.div 
                            variants={slideInVariants("right")}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.5 }}> 
                            <Title>
                                Hi! I'm <br/> {Bio.name}
                            </Title>
                            </motion.div>
                            <TextLoop>
                                A
                                <Span>
                                    <Typewriter options={{
                                        strings: Bio.roles,
                                        autoStart: true,
                                        loop: true,
                                    }}/>
                                </Span>
                            </TextLoop>
                            <motion.div 
                                variants={slideInVariants("left")}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.5 }}>
                            <SubTitle> {Bio.description} </SubTitle>
                            </motion.div>
                            <motion.div {...headContainerAnimation}>
                            <ResumeButton href={Bio.resume} target="_blank"> Check Resume </ResumeButton>
                            </motion.div>
                        </HeroLeftContainer>
                        <HeroRightContainer>
                            <Tilt>
                                <Img src={HeroImg} alt= "Md Tasrif Khan" />
                            </Tilt>
                        </HeroRightContainer>
                    </HeroInnerContainer>
        </HeroContainer> 
    </div>
  )
}

export default Hero