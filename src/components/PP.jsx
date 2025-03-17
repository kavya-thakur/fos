import React from "react";
import { ContainerScroll } from "../utils/UI";  // Adjust path if needed
import pp from "../assets/pp.jpg";

export function HeroScrollDemo() {
  return (
    <div className="flex flex-col overflow-hidden max-h-[700px] md:max-h-[800px]">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-black dark:text-white">
              Unleash the power of <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                Scroll Animations
              </span>
            </h1>
          </>
        }
      >
        <img
          src={pp}  // Image path should be relative to /public folder
          alt="hero"
          height={20}
          width={700}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
}
