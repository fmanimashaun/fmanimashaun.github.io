import { useState } from "react";
import { authorData } from "@/data/authorData";
import ExperienceContentHeader from "./ExperienceContentHeader";

const ExperienceContent = () => {
  const [tabIndex, setTabIndex] = useState(1);
  const experiences = authorData.experience;

  const currentExperience = experiences.find((exp) => exp.id === tabIndex);

  return (
    <div className="experience-content">
      <div className="experience-content__header">
        <ExperienceContentHeader
          experienceData={experiences}
          index={tabIndex}
          setTabIndex={setTabIndex}
        />
      </div>
      <div className="experience-content__details">
        <div className="experience-content__head">
          <h3 className="experience-content__position">
            {currentExperience.position}
            <br />
            <span className="experience-content__company">
              <a
                href="#"
                target="_blank"
                className="experience-content__company-link"
              >
                {"@" + currentExperience.company}
              </a>
              {` - ${currentExperience.startDate} - ${currentExperience.endDate}`}
            </span>
          </h3>
        </div>
        <ul className="experience-content__description-list">
          {currentExperience.description.map((desc, index) => (
            <li key={index} className="experience-content__description-item">
              {desc}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ExperienceContent;
