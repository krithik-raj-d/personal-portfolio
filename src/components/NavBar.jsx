import React from "react";
import StaggeredMenu from "./StaggeredMenu";

const menuItems = [
  { label: "Services", ariaLabel: "Go to Services", link: "/" },
  { label: "Projects", ariaLabel: "Checkout My Projects", link: "/about" },
  { label: "My Work", ariaLabel: "View My Work", link: "/services" },
  { label: "About Me", ariaLabel: "About Me", link: "/contact" },
];

const socialItems = [
  { label: "Twitter", link: "https://twitter.com" },
  { label: "GitHub", link: "https://github.com" },
  { label: "LinkedIn", link: "https://linkedin.com" },
];

const NavBar = ({ className }) => {
  return (
    <>
      <div
        className={`max-w-3xl mx-auto rounded-full fixed w-full z-50 top-5
                    bg-transparent 
                    backdrop-blur-xs
                    border border-white/30 
                    shadow-sm px-5 ${className}`}
      >
        <div className="p-5 flex justify-between w-full text-lg items-center">
          <a
            href=""
            className="text-white font-medium hover:underline uppercase"
          >
            Services
          </a>
          <a
            href=""
            className="text-white font-medium hover:underline uppercase"
          >
            Projects
          </a>
          <a
            href=""
            className="text-white font-medium hover:underline uppercase"
          >
            My Work
          </a>
          <a
            href=""
            className="text-white font-medium hover:underline uppercase"
          >
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
      <div
        // style={{ background: "#1a1a1a" }}
        className="md:hidden absolute top-0 left-0 w-full h-full z-50 flex items-center justify-center"
      >
        <StaggeredMenu
          position="right"
          items={menuItems}
          socialItems={socialItems}
          displaySocials
          displayItemNumbering={true}
          menuButtonColor="#ffffff"
          openMenuButtonColor="#fff"
          changeMenuColorOnOpen={true}
          colors={["#B19EEF", "#5227FF"]}
          // logoUrl="/path-to-your-logo.svg"
          accentColor="#5227FF"
          //   onMenuOpen={() => console.log("Menu opened")}
          //   onMenuClose={() => console.log("Menu closed")}
        />
      </div>
    </>
  );
};

export default NavBar;
