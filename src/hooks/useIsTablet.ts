import { useState, useEffect } from "react";

// Custom hook to detect mobile mode
const useIsMobile = () => {
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    // Function to update the state based on window size
    const handleResize = () => {
      setIsTablet(window.innerWidth <= 1024); // Example: Tablet if width <= 1024px
    };

    // Initial check when the component mounts
    handleResize();

    // Add event listener on window resize
    window.addEventListener("resize", handleResize);

    // Cleanup event listener when the component unmounts
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isTablet;
};

export default useIsMobile;

