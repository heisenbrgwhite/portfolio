import React, { useEffect, useState } from "react";
import About from "./components/About";
import Card from "./components/Card";
import Footer from "./components/Footer";
import Skills from "./components/Skills";
import ContactMe from "./components/contact";
import AOS from "aos";
import "aos/dist/aos.css";
import ImgOne from "./components/Image1";
import ImgTwo from "./components/Image2";
import NavBar from "./components/Navbar";
import Img3 from "./components/Image3";
import Projects from "./components/Projects";

function App() {
  useEffect(() => {
    AOS.init({
      once: true,
    });
  });
  const [bigScreen, setBigScreen] = useState(false);
  const [scroll, setScroll] = useState(0);
  const screenSize = () => {
    if (window.matchMedia("(min-width: 768px)").matches) {
      setBigScreen(true);
    } else setBigScreen(false);
  };
  const ScrollListener = () => {
    setScroll(window.scrollY);
  };

  window.addEventListener("scroll", ScrollListener);

  useEffect(() => {
    screenSize();
  });

  window.addEventListener("resize", screenSize);

  return bigScreen ? (
    <div id="home" className="scroll-smooth">
      <NavBar scroll={scroll}/>
      <ImgOne>
      <div className="z-20 sticky top-0 w-full">
        <div
          data-aos="fade-down"
          data-aos-duration="800"
        >
          <Card scroll={(scroll>=668)&& true}/>
        </div>
      </div>
      </ImgOne>
      <div className="z-40 sticky w-full h-screen bg-white">
        <div data-aos="fade-up" data-aos-duration="800" data-aos-delay="400">
          <About />
        </div>
        <ImgTwo>
          <Skills />
        </ImgTwo>
        <Projects/>
        <Img3>
        <ContactMe />
        </Img3>
        <Footer />
        
      </div>
    </div>
  ) : (
    <div id="home" className="min-h-screen py-10 px-3 sm:px-5 bg-slate-400 scroll-smooth">
      <NavBar scroll={scroll}/>
      <div data-aos="fade-down" data-aos-duration="800">
        <Card />
      </div>
      <div data-aos="fade-up" data-aos-duration="800" data-aos-delay="400">
        <About />
        <Skills />
        <Projects/>
        <ContactMe />
        <Footer />
      </div>
    </div>
  );
}
export default App;
