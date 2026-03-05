import CardSwap, { Card } from "./CardSwap";
import BlurText from "./BlurText";

const Services = () => {
  return (
    <div className="bg-[url(/service-bg.jpg)] bg-no-repeat bg-cover bg-center md:bg-top w-full min-h-screen flex flex-col md:flex-row md:justify-between p-5 md:p-20">
      <div className="outline-1 outline-white/30 outline-offset-4 bg-white/10 backdrop-blur-xs p-5 rounded-lg flex flex-col items-center">
        {/* <h1 className="text-white text-4xl md:text-6xl font-bold uppercase mb-5 max-w-xl">
          Where Strategy Meets Execution
        </h1> */}
        <BlurText
          text="Where Strategy Meets Execution"
          delay={200}
          animateBy="words"
          direction="top"
          // onAnimationComplete={handleAnimationComplete}
          className="text-white text-4xl md:text-6xl font-bold uppercase mb-5 max-w-xl"
        />
        {/* <p className="text-white text-lg md:text-xl mb-5 max-w-xl">
          I offer a comprehensive suite of services designed to bring your
          digital vision to life. 
        </p> */}
        <BlurText
          text="I offer a comprehensive suite of services designed to bring your digital vision to life"
          delay={200}
          animateBy="words"
          direction="top"
          // onAnimationComplete={handleAnimationComplete}
          className="text-white text-lg md:text-xl mb-5 max-w-xl"
        />
        <div className="w-full flex flex-col gap-7 pt-5 pb-10">
          <div className="relative outline-1 outline-white/30 outline-offset-4 bg-white/10 backdrop-blur-xs px-1 py-6 rounded-lg flex items-center w-full">
            <h1 className="absolute text-white text-4xl md:text-8xl font-bold max-w-xl uppercase ml-2">
              1
            </h1>
            <h3 className="text-white text-xl md:text-2xl font-semibold ml-20 uppercase">
              Web Development
            </h3>
          </div>
          <div className="relative outline-1 outline-white/30 outline-offset-4 bg-white/10 backdrop-blur-xs px-1 py-6 rounded-lg flex items-center w-full">
            <h1 className="absolute text-white text-4xl md:text-8xl font-bold max-w-xl uppercase ml-2">
              2
            </h1>
            <h3 className="text-white text-xl md:text-2xl font-semibold ml-20 uppercase">
              Mobile App Development
            </h3>
          </div>
          <div className="relative outline-1 outline-white/30 outline-offset-4 bg-white/10 backdrop-blur-xs px-1 py-6 rounded-lg flex items-center w-full">
            <h1 className="absolute text-white text-4xl md:text-8xl font-bold max-w-xl uppercase ml-2">
              3
            </h1>
            <h3 className="text-white text-xl md:text-2xl font-semibold ml-20 uppercase">
              Website Design & UI/UX
            </h3>
          </div>
          <div className="relative outline-1 outline-white/30 outline-offset-4 bg-white/10 backdrop-blur-xs px-1 py-6 rounded-lg flex items-center w-full">
            <h1 className="absolute text-white text-4xl md:text-8xl font-bold max-w-xl uppercase ml-2">
              4
            </h1>
            <h3 className="text-white text-xl md:text-2xl font-semibold ml-20 uppercase">
              SEO Optimization
            </h3>
          </div>
        </div>
        <button
          className="rounded-full w-full text-sm md:text-lg font-semibold
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
          Let's work together
        </button>
      </div>
      <div className="relative hidden xl:block">
        <CardSwap
          cardDistance={60}
          verticalDistance={70}
          delay={3000}
          pauseOnHover={false}
        >
          <Card customClass="bg-red-500 bg-[url(/mobile-app.jpg)] bg-no-repeat bg-cover bg-center w-full"></Card>
          <Card customClass="bg-red-500 bg-[url(/web-app.jpg)] bg-no-repeat bg-cover bg-center w-full"></Card>
          <Card customClass="bg-red-500 bg-[url(/ui-ux.jpg)] bg-no-repeat bg-cover bg-center w-full"></Card>
          <Card customClass="bg-red-500 bg-[url(/seo-optimise.jpg)] bg-no-repeat bg-cover bg-center w-full"></Card>
        </CardSwap>
      </div>
    </div>
  );
};

export default Services;
