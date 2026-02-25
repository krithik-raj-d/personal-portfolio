import React from "react";

const NavBar = () => {
  return (
    <div
      className="max-w-2xl mx-auto rounded-2xl fixed w-full z-50 top-5
                    bg-transparent 
                    backdrop-blur-xs
                    border border-white/30 
                    shadow-sm"
    >
      <div className="p-5 flex justify-between w-full">
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
      </div>
    </div>
  );
};

export default NavBar;
