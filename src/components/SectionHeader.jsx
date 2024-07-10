import PropTypes from "prop-types";

const SectionHeader = ({ title }) => {
  return <h2 className={`${title.toLowerCase()}__heading`}>{title}</h2>;
};

SectionHeader.propTypes = {
  //   children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
};

export default SectionHeader;
