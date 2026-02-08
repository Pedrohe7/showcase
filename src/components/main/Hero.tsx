import React from "react";
import HeroContent from "../sub/HeroContent";

const Hero = () => {
  return (
    <div className="relative flex flex-col h-full w-full" id="about-me">
      <div className="absolute top-[-250px] left-0 z-[1] w-full h-full opacity-50 pointer-events-none">
         <div className="w-full h-full bg-gradient-to-b from-purple-900/20 to-black" />
      </div>
      <HeroContent />
    </div>
  );
};

export default Hero;
