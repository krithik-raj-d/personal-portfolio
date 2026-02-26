import React from "react";
import BlurText from "./BlurText";

const Hero = () => {
  const handleAnimationComplete = () => {
    console.log("Animation completed!");
  };
  return (
    <div className="h-[90vh] md:h-screen w-full bg-[url(/8777566.jpg)] bg-no-repeat bg-cover flex flex-col md:items-center justify-center px-5 md:px-20">
      <BlurText
        text="Crafting immersive web experiences with precision and performance."
        delay={200}
        animateBy="words"
        direction="top"
        onAnimationComplete={handleAnimationComplete}
        className="text-3xl md:text-5xl mb-8 text-white font-semibold max-w-3xl leading-10 md:leading-15 md:justify-center md:text-center"
      />
      <button
        className="rounded-full text-sm font-medium
             bg-white/10
             backdrop-blur-xs
             border border-white/30
             text-white
             p-5
             cursor-pointer
             transition-all duration-300 ease-out
             hover:border-x-amber-600
             hover:shadow-[0_0_15px_rgba(235,70,15,0.6)]
             hover:scale-105 uppercase"
      >
        View my projects
      </button>
    </div>
  );
};

export default Hero;
