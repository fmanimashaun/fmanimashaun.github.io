import ButtonLink from "./ButtonLink";
import Resume from "@/data/resume.pdf";

const Intro = () => {
  return (
    <div className="intro">
      <p className="intro__greeting">Hi, My Name is</p>
      <h1 className="intro__name">
        Engr. Animashaun F.M (CFM®, FMP®, MNSE, COREN)
      </h1>
      <p className="intro__tagline">
        I build innovative solutions for the web and facilities management.
      </p>
      <p className="intro__description">
        I’m a full-stack developer skilled in React, Typescript, Ruby, PHP,
        Node.js, Ruby on Rails, and AWS cloud services. Currently, I develop
        internal software at Max-Migold and Star University, where I also manage
        Moodle LMS on AWS cloud for high availability and customization.
        Additionally, I’m building a matchmaking service platform for working
        professionals at JoyMatcher. My ten years of facilities management
        experience give me a unique problem-solving edge, bridging technology
        and operational efficiency.
      </p>
      <ButtonLink href={Resume} className="intro__download">
        Resume
      </ButtonLink>
    </div>
  );
};

export default Intro;
