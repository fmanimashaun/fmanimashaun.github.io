import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { FaArrowUp } from "react-icons/fa";
import WelcomeScreen from "@/components/WelcomeScreen";
import Intro from "@/components/Intro";
import About from "./components/About";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import AsideLeft from "./components/AsideLeft";
import AsideRight from "./components/AsideRight";
import Work from "./components/Work";

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
          <AsideLeft />
          <main className="main">
            <Intro />
            <About />
            <Experience />
            <Work />
            <Contact />

            {isVisible && (
              <button className="back-top" type="button" onClick={scrollToTop}>
                <FaArrowUp />
              </button>
            )}
          </main>
          <AsideRight />
          <Footer />
        </>
      )}
    </>
  );
};

export default App;
