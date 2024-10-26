import { useState } from 'react';
import './App.css';
import logo from './logo.svg';
import Header from './Components/Header';
import Menu from './Components/Menu';
import MainContent from './Components/MainContent';

function App() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  return (
    <main className="App">
  <Header setMenuOpen={setMenuOpen}/>
  <MainContent/>
  <Menu isMenuOpen={isMenuOpen} setMenuOpen={setMenuOpen}/>
    </main>
  );
}

export default App;
