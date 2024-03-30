import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { FaArrowUp } from "react-icons/fa";

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
      <main>
        <div
          id="about"
          style={{
            height: "90vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "3rem",
            color: "white",
            background: "black",
          }}
        >
          about
        </div>

        <div
          id="experience"
          style={{
            height: "80vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "3rem",
            color: "white",
            background: "red",
          }}
        >
          Experience
        </div>

        <div
          id="work"
          style={{
            height: "80vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "3rem",
            color: "white",
            background: "yellow",
          }}
        >
          Experience
        </div>

        <div
          id="contact"
          style={{
            height: "80vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "3rem",
            color: "black",
            background: "white",
          }}
        >
          Experience
        </div>
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
