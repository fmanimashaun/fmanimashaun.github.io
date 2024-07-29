import { useEffect, useRef } from "react";
import SectionHeader from "./SectionHeader";

const Work = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const currentSection = sectionRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (currentSection) {
      observer.observe(currentSection);
    }

    return () => {
      if (currentSection) {
        observer.unobserve(currentSection);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} id="work" className="work">
      <SectionHeader title="Work">Some Things I’ve Built</SectionHeader>
      <div className="work__content">
        <h2>Coming Soon...</h2>
      </div>
    </section>
  );
};

export default Work;
