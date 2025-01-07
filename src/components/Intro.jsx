import { useEffect, useRef } from "react";
import ButtonLink from "./ButtonLink";
import Resume from "@/data/updated-resume.pdf";

const Intro = () => {
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
    <div ref={sectionRef} className="intro">
      <p className="intro__greeting">Hi, My Name is</p>
      <h2 className="intro__name">Engr. Animashaun F.M</h2>
      <p className="intro__tagline">
        Full-stack Developer | React, Javascript & Typescript, Ruby on
        Rails | Moodle LMS Expert | Aspiring DevOps Engineer | MNSE, COREN, FM,
        CFM Certified
      </p>
      <p className="intro__description">
        I&apos;m a full-stack developer specializing in web, mobile and cloud
        solutions. Currently, I&apos;m focused on internal software development
        at{" "}
        <a href="#" target="_blank">
          Max-Migold
        </a>{" "}
        and building{" "}
        <a href="#" target="_blank">
          JoyMatcher
        </a>
        , a professional matchmaking platform.
      </p>
      <ButtonLink href={Resume} className="intro__download">
        Resume
      </ButtonLink>
    </div>
  );
};

export default Intro;
