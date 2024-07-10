import PropTypes from "prop-types";

const SectionHeader = ({ className, sectionNumber, title }) => {
  return (
    <h2 className={`${className}__heading`}>
      <span>{sectionNumber}</span>
      <span>{title}</span>
    </h2>
  );
};

SectionHeader.propTypes = {
  //   children: PropTypes.node.isRequired,
  className: PropTypes.string.isRequired,
  sectionNumber: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default SectionHeader;
