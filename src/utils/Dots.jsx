import React from "react";

const DotBackground = ({ children }) => {
  return (
    <div className="relative w-full py-20 bg-white dark:bg-black overflow-hidden">
      <div className="absolute inset-0 w-full h-full [background-size:20px_20px] [background-image:radial-gradient(#d4d4d4_1px,transparent_1px)] dark:[background-image:radial-gradient(#404040_1px,transparent_1px)]" />
      <div className="absolute inset-0 w-full h-full bg-white dark:bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_50%,black)]"></div>
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default DotBackground;
