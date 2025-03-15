import { useEffect } from 'react';
import Lenis from 'lenis';

const useLenis = () => {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.1,  // Defines smoothness of the scroll
      smoothWheel: true,  // Enables smooth scroll for mouse wheel
      smoothTouch: false,  // Disables smooth scrolling for touch (optional)
    });

    // Animation frame loop
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy(); // Cleanup on unmount
    };
  }, []);
};

export default useLenis;
