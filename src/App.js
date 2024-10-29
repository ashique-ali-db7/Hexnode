import { useEffect, useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import Menu from "./Components/Menu";
import MainContent from "./Components/MainContent";
import UseCases from "./Components/UseCases";
import Details from "./Components/Details";
import SimpleSlider from "./Components/Slider";
import Support from "./Components/Supports";
import Signup from "./Components/SignUp";
import Popup from "./Components/Chat";

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
      <Support />
      <Signup />
      <Menu isMenuOpen={isMenuOpen} setMenuOpen={setMenuOpen} />
      <Popup />
    </main>
  );
}

export default App;
