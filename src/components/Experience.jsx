import { useEffect, useRef } from "react";
import SectionHeader from "./SectionHeader";
import ExperienceContent from "./ExperienceContent";
export const Experience = () => {
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
    <section ref={sectionRef} id="experience" className="experience">
      <SectionHeader title="Experience">Where I’ve Worked</SectionHeader>
      <ExperienceContent />
    </section>
  );
};
