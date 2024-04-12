import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { FaArrowUp } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { FiTwitter } from "react-icons/fi";
import { FiInstagram } from "react-icons/fi";
import { AiOutlineLinkedin } from "react-icons/ai";
import { FaCodepen } from "react-icons/fa";
import Aside from "./components/Aside";
import SectionHeader from "./components/SectionHeader";

const App = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 200) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <>
      <Header />
      <main className="main">
        <Aside className="left">
          <div className="aside__icons">
            <a href="https://github.com/fmanimashaun" target="_blank">
              <FiGithub size={25} />
            </a>
            <a href="https://www.instagram.com/fmanimashaun/" target="_blank">
              <FiInstagram size={25} />
            </a>
            <a href="https://twitter.com/fmanimashaun" target="_blank">
              <FiTwitter size={25} />
            </a>
            <a href="https://www.linkedin.com/in/fmanimashaun/" target="_blank">
              <AiOutlineLinkedin size={25} />
            </a>
            <a href="https://codepen.io/fmanimashaun" target="_blank">
              <FaCodepen size={25} />
            </a>
          </div>
        </Aside>
        <div className="main__wrapper">
          <div id="about">
            <SectionHeader className="about" />
          </div>
        </div>
        <Aside className="right">
          <div className="aside__link">
            <a href="https://fmanimashaun.com/" className="website">
              https://fmanimashaun.com/
            </a>
          </div>
        </Aside>
        {isVisible && (
          <button className="back-top" type="button" onClick={scrollToTop}>
            <FaArrowUp />
          </button>
        )}
      </main>

      <Footer />
    </>
  );
};

export default App;
