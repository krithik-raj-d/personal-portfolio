import React from "react";
import BlurText from "./BlurText";

const Hero = () => {
  const handleAnimationComplete = () => {
    console.log("Animation completed!");
  };
  return (
    <div className="h-screen w-full bg-[url(/bg-connect.png)] bg-no-repeat bg-cover flex flex-col items-start justify-center px-20">
      <BlurText
        text="Crafting immersive web experiences with precision and performance."
        delay={300}
        animateBy="words"
        direction="top"
        onAnimationComplete={handleAnimationComplete}
        className="text-5xl mb-8 text-white font-semibold max-w-2xl leading-15"
      />
      <button
        className="rounded-full text-sm font-medium
             bg-transparent
             backdrop-blur-xs
             border border-white/30
             text-white
             p-5
             cursor-pointer
             transition-all duration-300 ease-out
             hover:border-cyan-400
             hover:shadow-[0_0_15px_rgba(34,211,238,0.6)]
             hover:scale-105 uppercase"
      >
        View my projects
      </button>
    </div>
  );
};

export default Hero;
