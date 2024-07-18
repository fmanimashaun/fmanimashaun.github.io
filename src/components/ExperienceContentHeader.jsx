import { authorData } from "@/data/authorData";
import { useState } from "react";
import useContainerHeight from "@/hooks/useContainerHeight";
import Marker from "./Marker";

export const ExperienceContentHeader = () => {
  const [tabIndex, setTabIndex] = useState(1);
	const [containerRef, height] = useContainerHeight();
  const experiences = authorData.experience;

  return (
    <div ref={containerRef} className="experience__tabs">
			<Marker className="experience__marker" height={height / experiences.length} offset={(tabIndex - 1) * (height / experiences.length)} />
			
      {experiences.map((data) => (
        <button
          key={data.id}
          className={`experience__tab-item ${tabIndex === data.id ? "active" : ""}`}
          onClick={() => setTabIndex(data.id)}
        >
          {data.company}
        </button>
      ))}
    </div>
  );
};
