import PropTypes from "prop-types";

import useContainerHeight from "@/hooks/useContainerHeight";
import Marker from "./Marker";
// import useActiveButtonWidth from "@/hooks/useActiveButtonWidth";
import useButtonOffset from "@/hooks/useButtonOffset";

const ExperienceContentHeader = ({ experienceData, index, setTabIndex }) => {
  const [containerRef, height] = useContainerHeight();
  const [buttonRefs, buttonOffset, activeButtonWidth] = useButtonOffset(index, [
    experienceData,
  ]);

  return (
    <div className="experience-content__tabs">
      <div ref={containerRef} className="experience-content__tabs-wrapper">
        <Marker
          className="experience-content__marker"
          offset={buttonOffset}
          width={activeButtonWidth}
          height={height / experienceData.length}
          index={index}
          breakpoint={450}
        />

        {experienceData.map((data) => (
          <button
            key={data.id}
            ref={(el) => (buttonRefs.current[data.id] = el)}
            className={`experience-content__tab-item ${
              index === data.id ? "experience-content__tab-item--active" : ""
            }`}
            onClick={() => setTabIndex(data.id)}
          >
            {data.company}
          </button>
        ))}
      </div>
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
