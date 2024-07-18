import PropTypes from "prop-types";

const SectionHeader = ({ title, children }) => {
  return <h2 className={`${title.toLowerCase()}__heading`}>{children}</h2>;
};

SectionHeader.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default SectionHeader;
