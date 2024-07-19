import PropTypes from "prop-types";
import useWindowWidth from "@/hooks/useWindowWidth";

const Marker = ({ index, height, width = 2, offset, className, breakpoint }) => {
  const windowWidth = useWindowWidth();

  const style = {
    position: "absolute",
    left: `${windowWidth < breakpoint ? offset : 0}px`,
    height: `${windowWidth < breakpoint ? 2 : height}px`,
    width: `${windowWidth < breakpoint ? width : 2}px`,
    top: `${windowWidth < breakpoint ? "100%" : `${(index - 1) * height}px`}`,
    transition: "top 0.5s ease, left 0.5s ease",
  };

  return <div className={className} style={style}></div>;
};

Marker.propTypes = {
  height: PropTypes.number,
  width: PropTypes.number,
  offset: PropTypes.number.isRequired,
  className: PropTypes.string,
  index: PropTypes.number,
  breakpoint: PropTypes.number,
};

export default Marker;
