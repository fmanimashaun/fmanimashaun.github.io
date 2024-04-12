import PropTypes from "prop-types";

const SectionHeader = ({ className }) => {
  return (
    <h2 className={`${className}__heading`}>
      <span>01.</span>
      <span>About</span>
    </h2>
  );
};

SectionHeader.propTypes = {
  //   children: PropTypes.node.isRequired,
  className: PropTypes.string.isRequired,
};

export default SectionHeader;
