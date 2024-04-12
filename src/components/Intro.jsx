import React from "react";
import ButtonLink from "./ButtonLink";

const Intro = () => {
  return (
    <div className="intro">
      <p>Hi, My Name is</p>
      <h1>Engr. Animashaun F.M</h1>
      <p>...Building the Next Big Thing</p>
      <p>
        I&apos;m a software engineer specializing in building internal software
        solutions to address evolving business needs. Currently, I'm focused on
        crafting impactful applications at{" "}
        <a href="https://maxmigold.com/" target="_blank">
          Max-Migold
        </a>
        , drawing on my unique background in facilities management for a
        problem-solving edge.
      </p>
      <ButtonLink
        href={Resume}
        className="header__download"
      >
        Resume
      </ButtonLink>
    </div>
  );
};

export default Intro;
