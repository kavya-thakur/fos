import React, { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";

const LocomotiveScrollProvider = ({ children }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const locoScroll = new LocomotiveScroll({
      el: containerRef.current,
      smooth: true,
      multiplier: 1, // Adjusts scroll speed (1 = default, higher = faster)
    });

    return () => locoScroll.destroy(); // Cleanup on unmount
  }, []);

  return (
    <div ref={containerRef} data-scroll-container className="min-h-screen">
      {children}
    </div>
  );
};

export default LocomotiveScrollProvider;
