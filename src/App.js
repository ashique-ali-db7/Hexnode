import { useEffect, useState } from "react";
import "./App.css";
import logo from "./logo.svg";
import Header from "./Components/Header";
import Menu from "./Components/Menu";
import MainContent from "./Components/MainContent";
import UseCases from "./Components/UseCases";
import Details from "./Components/Details";
import SimpleSlider from "./Components/Slider";
import Support from "./Components/Supports";
import Signup from "./Components/SignUp";

function App() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);
  return (
    <main className="App">
      <Header setMenuOpen={setMenuOpen} />
      <MainContent />
      <UseCases />
      <Details />
      <SimpleSlider />

      <Menu isMenuOpen={isMenuOpen} setMenuOpen={setMenuOpen} />

      <Support />
      <Signup />
    </main>
  );
}

export default App;
