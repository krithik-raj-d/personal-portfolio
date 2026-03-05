import React from "react";
import MagicBento from "./MagicBento";
import ScrollStack, { ScrollStackItem } from "./ScrollStack";

const Projects = () => {
  return (
    <div className="bg-[url(/project.jpg)] bg-no-repeat bg-cover w-full h-screen flex justify-center md:justify-between items-center p-5 md:p-20">
      <div className="w-full">
        <h1 className="text-white text-4xl md:text-6xl font-bold max-w-xl uppercase">
          From Concept to Interface
        </h1>
        <p className="my-3 text-sm font-medium italic text-amber-700 bg-white/10 backdrop-blur-xs">
          Real world applications designed with a focus on performance,
          scalability, and intuitive user experience
        </p>
      </div>
      {/* <MagicBento
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
      /> */}

      <ScrollStack className="bg-transparent">
        <ScrollStackItem itemClassName="bg-white/10 border border-white/30 backdrop-blur-sm">
          <h2>Card 1</h2>
          <p>This is the first card in the stack</p>
        </ScrollStackItem>
        <ScrollStackItem itemClassName="bg-white/10 border border-white/30 backdrop-blur-sm">
          <h2>Card 2</h2>
          <p>This is the second card in the stack</p>
        </ScrollStackItem>
        <ScrollStackItem itemClassName="bg-white/10 border border-white/30 backdrop-blur-sm">
          <h2>Card 3</h2>
          <p>This is the third card in the stack</p>
        </ScrollStackItem>
      </ScrollStack>
    </div>
  );
};

export default Projects;
