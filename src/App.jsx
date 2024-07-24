import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { FaArrowUp } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { FiTwitter } from "react-icons/fi";
import { FiInstagram } from "react-icons/fi";
import { AiOutlineLinkedin } from "react-icons/ai";
import { FaCodepen } from "react-icons/fa";
import Aside from "@/components/Aside";
import SectionHeader from "@/components/SectionHeader";
import WelcomeScreen from "@/components/WelcomeScreen";
import Intro from "@/components/Intro";
import ContactContent from "@/components/ContactContent";
import About from "./components/About";
import { Experience } from "./components/Experience";

const App = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showWelcome, setShowWelcome] = useState(true);

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

  useEffect(() => {
    const timeout = setTimeout(() => setShowWelcome(false), 4000);

    // Cleanup function to clear the timeout when the component unmounts
    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      {showWelcome ? (
        <WelcomeScreen />
      ) : (
        <>
          <Header />
          <Aside className="left">
            <div className="aside__icons">
              <a href="https://github.com/fmanimashaun" target="_blank">
                <FiGithub size={20} />
              </a>
              <a href="https://www.instagram.com/fmanimashaun/" target="_blank">
                <FiInstagram size={20} />
              </a>
              <a href="https://twitter.com/fmanimashaun" target="_blank">
                <FiTwitter size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/fmanimashaun/"
                target="_blank"
              >
                <AiOutlineLinkedin size={20} />
              </a>
              <a href="https://codepen.io/fmanimashaun" target="_blank">
                <FaCodepen size={20} />
              </a>
            </div>
          </Aside>
          <main className="main">
            <Intro />
            <About />
            <Experience />

            <div id="work" className="work">
              <SectionHeader title="Work">Some Things I’ve Built</SectionHeader>
            </div>

            <div id="contact" className="contact">
              <SectionHeader title="Contact">What’s Next?</SectionHeader>
              <ContactContent />
            </div>

            {isVisible && (
              <button className="back-top" type="button" onClick={scrollToTop}>
                <FaArrowUp />
              </button>
            )}
          </main>
          <Aside className="right">
            <div className="aside__link">
              <a
                href="mailto:fisayo.animashaun@outlook.com"
                className="website"
              >
                fmanimashaun.github.io
              </a>
            </div>
          </Aside>
          <Footer />
        </>
      )}
    </>
  );
};

export default App;
