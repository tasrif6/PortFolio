import styled, { ThemeProvider } from "styled-components";
import { darkTheme } from "./utils/Themes";
import Navbar from "./components/Navbar";
import { BrowserRouter } from "react-router-dom";
import Hero from "./components/section/Hero";
import Skills from "./components/section/Skills";
import Experience from "./components/section/Experience";
import StyledStarsCanvas from "./components/canvas/Stars";
import Projects from "./components/section/Projects";
import Contact from "./components/section/Contact";
import Footer from "./components/section/Footer";

const Body = styled.div`
  background-color: ${({ theme }) => theme.bg };
  color: ${({ theme }) => theme.text_primary};
  width: 100%;
  height: 90vh
  overflow-x: hidden;
  position: relative;
`;
const Wrapper = styled.div`
  padding-bottom: 100px;
  background: linear-gradient(
        38.73deg,
        rgba(204, 0, 187, 0.15) 0%,
        rgba(201, 32, 184, 0) 50%
      ),
      linear-gradient(
        141.27deg,
        rgba(0, 70, 209, 0) 50%,
        rgba(0, 70, 209, 0.15) 100%
      );
    width: 100%;
    clip-path: polygon(0 0, 100% 0, 100% 100%, 30% 98%, 0 100%);
  `;

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <BrowserRouter>
        <Navbar/>
        <Body>
          <StyledStarsCanvas />
          <div>
          <Wrapper>
          <Hero/>
          </Wrapper>
            <Skills />
            <Experience/>
          <Wrapper>
            <Projects />
          </Wrapper>
            <Contact />
         
          <Footer />
        </div>
        </Body>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
