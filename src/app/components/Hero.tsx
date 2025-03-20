"use client"
import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";

const Hero = () => {

  const { theme } = useTheme();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  return (
    <div style={{color: theme === "dark" ? "white" : "black"}} className=" w-full px-4 sm:px-8 md:px-16 lg:px-24 py-12 flex flex-col items-center text-center">
      <h1 className="text-4xl sm:text-5xl md:text-6xl  max-w-xl sm:max-w-3xl leading-tight">
        Exploring the <span className="text-green-400">Mind,</span> Code, and Language <span className="text-green-400">—</span> One Post at a Time
      </h1>

      <div className="flex mt-12 w-full justify-center"></div>
    </div>
  );
};

export default Hero;
