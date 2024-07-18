import PropTypes from "prop-types";

const Marker = ({ height, offset, className }) => {
  const style = {
    position: "absolute",
    top: `${offset}px`,
    left: "0",
    height: `${height}px`,
    width: "2px",
		transition: "top 0.5s ease",
  };
  return <div className={className} style={style}></div>;
};

Marker.propTypes = {
  height: PropTypes.number.isRequired,
  offset: PropTypes.number.isRequired,
	className: PropTypes.string,
};

export default Marker;
