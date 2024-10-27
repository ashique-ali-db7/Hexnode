import { useState } from "react";
import "./App.css";
import logo from "./logo.svg";
import Header from "./Components/Header";
import Menu from "./Components/Menu";
import MainContent from "./Components/MainContent";
import UseCases from "./Components/UseCases";
import Details from "./Components/Details";

function App() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <main className="App">
      <Header setMenuOpen={setMenuOpen} />
      <MainContent />
      <UseCases />
      <Details />
      <Menu isMenuOpen={isMenuOpen} setMenuOpen={setMenuOpen} />
    </main>
  );
}

export default App;
