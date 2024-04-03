import PropTypes from "prop-types";

const Aside = ({ children, className }) => {
  return <aside className={`aside ${className}`}>{children}</aside>;
};

Aside.propTypes = {
  children: PropTypes.node.isRequired,
	className: PropTypes.string,
};

export default Aside;
