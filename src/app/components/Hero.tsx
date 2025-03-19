import React from "react";

const Hero = () => {
  return (
    <div className="text-white w-full px-4 sm:px-8 md:px-16 lg:px-24 py-12 flex flex-col items-center text-center">
      <h1 className="text-4xl sm:text-5xl md:text-6xl  max-w-xl sm:max-w-3xl leading-tight">
        Exploring the <span className="text-green-400">Mind,</span> Code, and Language <span className="text-green-400">—</span> One Post at a Time
      </h1>

      <div className="flex mt-12 w-full justify-center"></div>
    </div>
  );
};

export default Hero;
