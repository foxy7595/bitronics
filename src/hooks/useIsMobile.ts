import { useState, useEffect } from "react";

// Custom hook to detect mobile mode
const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Function to update the state based on window size
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Example: Mobile if width <= 768px
    };

    // Initial check when the component mounts
    handleResize();

    // Add event listener on window resize
    window.addEventListener("resize", handleResize);

    // Cleanup event listener when the component unmounts
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobile;
};

export default useIsMobile;
