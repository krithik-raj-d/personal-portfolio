import React from "react";

const NavBar = () => {
  return (
    <div
      className="max-w-3xl mx-auto rounded-full fixed w-full z-50 top-5
                    bg-transparent 
                    backdrop-blur-xs
                    border border-white/30 
                    shadow-sm px-5"
    >
      <div className="p-5 flex justify-between w-full text-lg items-center">
        <a href="" className="text-white font-medium hover:underline uppercase">
          Services
        </a>
        <a href="" className="text-white font-medium hover:underline uppercase">
          Projects
        </a>
        <a href="" className="text-white font-medium hover:underline uppercase">
          My Work
        </a>
        <a href="" className="text-white font-medium hover:underline uppercase">
          About Me
        </a>
        <button
          className="rounded-full text-sm font-medium
             bg-white/90
             backdrop-blur-xs
             border border-white/30
             text-amber-700
             py-2 px-5
             cursor-pointer
             transition-all duration-300 ease-out
             hover:border-amber-600
             hover:shadow-[0_0_15px_rgba(235,70,15,0.6)]
             hover:scale-105 uppercase"
        >
          Let's Talk
        </button>
      </div>
    </div>
  );
};

export default NavBar;
