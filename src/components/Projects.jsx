import React from "react";
import MagicBento from "./MagicBento";

const Projects = () => {
  return (
    <div className="bg-[url(/project.jpg)] bg-no-repeat bg-cover w-full h-screen flex justify-center md:justify-between items-center p-5 md:p-20">
      <h1 className="text-white text-4xl md:text-6xl font-bold max-w-xl uppercase">
        Where Ideas Meet Execution
      </h1>
      <MagicBento
        textAutoHide={true}
        enableStars={false}
        enableSpotlight
        enableBorderGlow={true}
        enableTilt={false}
        enableMagnetism={false}
        clickEffect
        spotlightRadius={400}
        particleCount={0}
        glowColor="132, 0, 255"
        disableAnimations={false}
      />
    </div>
  );
};

export default Projects;
