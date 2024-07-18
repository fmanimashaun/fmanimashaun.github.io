import PropTypes from "prop-types";

import useContainerHeight from "@/hooks/useContainerHeight";
import Marker from "./Marker";

const ExperienceContentHeader = ({ experienceData, index, setTabIndex }) => {
  const [containerRef, height] = useContainerHeight();

  return (
    <div ref={containerRef} className="experience__tabs">
      <Marker
        className="experience__marker"
        height={height / experienceData.length}
        offset={(index - 1) * (height / experienceData.length)}
      />

      {experienceData.map((data) => (
        <button
          key={data.id}
          className={`experience__tab-item ${
            index === data.id ? "active" : ""
          }`}
          onClick={() => setTabIndex(data.id)}
        >
          {data.company}
        </button>
      ))}
    </div>
  );
};

ExperienceContentHeader.propTypes = {
  index: PropTypes.number.isRequired,
  setTabIndex: PropTypes.func.isRequired,
  experienceData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      company: PropTypes.string.isRequired,
      position: PropTypes.string.isRequired,
      startDate: PropTypes.string.isRequired,
      endDate: PropTypes.string.isRequired,
      description: PropTypes.arrayOf(PropTypes.string).isRequired,
    })
  ).isRequired,
};

export default ExperienceContentHeader;
