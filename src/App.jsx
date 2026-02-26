import Hero from "./components/Hero";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="relative bg-black flex flex-col items-center">
      <NavBar className={"md:block hidden absolute"} />
      <Hero />
    </div>
  );
}

export default App;
