import { useState } from "react";
import { authorData } from "@/data/authorData";
import ExperienceContentHeader from "./ExperienceContentHeader";

const ExperienceContent = () => {
  const [tabIndex, setTabIndex] = useState(1);
  const experiences = authorData.experience;

  const currentExperience = experiences.find((exp) => exp.id === tabIndex);

  return (
    <div className="experience__wrapper">
      <ExperienceContentHeader experienceData={experiences} index={tabIndex} setTabIndex={setTabIndex}/>
      <div className="experience__content">
        <h3 className="experience__subheading">{currentExperience.position}</h3>
      </div>
    </div>
  );
};

export default ExperienceContent;
