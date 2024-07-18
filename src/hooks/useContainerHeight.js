import { useRef, useEffect, useState } from "react";

const useContainerHeight = () => {
  const containerRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (containerRef.current) {
      setHeight(containerRef.current.offsetHeight);
    }
  }, []);

  return [containerRef, height];
};

export default useContainerHeight;
