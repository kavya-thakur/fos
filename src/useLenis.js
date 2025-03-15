// src/hooks/useLenis.js
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

const useLenis = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2, // Scroll duration
      smoothWheel: true, // Smooth scroll for wheel events
      smoothTouch: true, // Disable smooth scroll for touch devices
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);
};

export default useLenis;
