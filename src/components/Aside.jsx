import { useEffect, useRef } from "react";
import PropTypes from "prop-types";

const Aside = ({ children, className }) => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const currentSection = sectionRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (currentSection) {
      observer.observe(currentSection);
    }

    return () => {
      if (currentSection) {
        observer.unobserve(currentSection);
      }
    };
  }, []);
  return <aside ref={sectionRef} className={`aside ${className}`}>{children}</aside>;
};

Aside.propTypes = {
  children: PropTypes.node.isRequired,
	className: PropTypes.string,
};

export default Aside;
