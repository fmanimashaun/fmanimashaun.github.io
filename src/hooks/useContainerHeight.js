import { useRef, useEffect, useState } from "react";


/**
 * Custom hook to calculate the height of a specified element and return the width.
 * Also recalculates on window resize.
 *
 * @returns {Array} - Array containing a ref for the element and its width.
 */

const useContainerHeight = () => {
  const containerRef = useRef(null);
  const [height, setHeight] = useState(0);

  const updateHeight = () => {
    if (containerRef.current) {
      setHeight(containerRef.current.offsetHeight);
    }
  };

  useEffect(() => {
    // Initial height calculation
    updateHeight();

    // Add resize event listener
    window.addEventListener('resize', updateHeight);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', updateHeight);
    };
  }, []); // Empty dependency array ensures this effect runs once on mount and cleanup on unmount

  return [containerRef, height];
};

export default useContainerHeight;
