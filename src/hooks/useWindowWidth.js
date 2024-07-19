import { useState, useEffect } from "react";

/**
 * Custom hook to track the width of the window. Updates the width value on window resize.
 *
 * @returns {number} - The current width of the window.
 */

const useWindowWidth = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return width;
}

export default useWindowWidth;
