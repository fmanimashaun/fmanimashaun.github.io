import PropTypes from "prop-types";

const ButtonLink = ({ href, download, target, className, children }) => {
  const isDownloadLink = download ? true : false;
  return (
    <a
      href={href}
      download={isDownloadLink ? download : null}
      target={isDownloadLink ? null : target}
      className={className}
    >
      {children}
    </a>
  );
};

ButtonLink.propTypes = {
  href: PropTypes.string.isRequired,
  download: PropTypes.string,
  target: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default ButtonLink;
