import Hero from "./components/Hero";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="bg-black flex flex-col items-center">
      <NavBar />
      <Hero />
    </div>
  );
}

export default App;
