import PropTypes from "prop-types";

const FeatureProject = ({ children }) => {
  return <div className="work__feature">{children}</div>;
};

FeatureProject.propTypes = {
  children: PropTypes.node.isRequired,
};

export default FeatureProject;
