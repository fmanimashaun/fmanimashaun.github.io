import ButtonLink from "./ButtonLink";
import Resume from "@/data/resume.pdf";

const Intro = () => {
  return (
    <div className="intro">
      <p className="intro__greeting">Hi, My Name is</p>
      <h2 className="intro__name">Engr. Animashaun F.M</h2>
      <p className="intro__tagline">
        Full-stack Developer | React, Javascript & Typescript, Ruby, PHP, Node, Rails |
        Moodle LMS Expert | Aspiring DevOps Engineer | MNSE, COREN, FM, CFM Certified
      </p>
      <p className="intro__description">
        I&apos;m a full-stack developer specializing in web, mobile and cloud
        solutions. Currently, I&apos;m focused on internal software development at{" "}
        <a href="#" target="_blank">Max-Migold</a> and <a href="#" target="_blank">Star University</a>, and building <a href="#" target="_blank">JoyMatcher</a>, a professional
        matchmaking platform.
      </p>
      <ButtonLink href={Resume} className="intro__download">
        Resume
      </ButtonLink>
    </div>
  );
};

export default Intro;
