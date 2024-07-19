import { useRef, useEffect, useState } from "react";

/**
 * Custom hook to calculate the distance of the active button from the left of its parent
 * and return the width of the active button. Also recalculates on window resize.
 *
 * @param {number} activeIndex - The index of the active button.
 * @param {Array} dependencies - Dependencies to watch for changes.
 * @returns {Array} - Array containing refs for the buttons, calculated offset, and active button width.
 */

const useButtonOffset = (activeIndex, dependencies = []) => {
  const buttonRefs = useRef([]);
  const [offset, setOffset] = useState(0);
  const [activeButtonWidth, setActiveButtonWidth] = useState(0);

  const calculateOffsets = () => {
    let totalOffset = 0;
    for (let i = 0; i < activeIndex; i++) {
      totalOffset += buttonRefs.current[i]?.offsetWidth || 0;
    }
    setOffset(totalOffset);

    // Set the width of the active button
    setActiveButtonWidth(buttonRefs.current[activeIndex]?.offsetWidth || 0);
  };

  useEffect(() => {
    // Initial calculation
    calculateOffsets();

    // Recalculate on window resize
    window.addEventListener('resize', calculateOffsets);

    // Cleanup listener on component unmount
    return () => {
      window.removeEventListener('resize', calculateOffsets);
    };
  }, [activeIndex, dependencies]); // Ensure to include dependencies

  return [buttonRefs, offset, activeButtonWidth];
};

export default useButtonOffset;
