import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";
import Services from "./components/Services";

function App() {
  return (
    <div className="relative bg-black flex flex-col items-center">
      <NavBar className={"md:block hidden absolute"} />
      <Hero />
      <Services />
      <Projects />
    </div>
  );
}

export default App;
