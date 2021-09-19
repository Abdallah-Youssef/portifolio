import { useEffect } from 'react';
import './App.css';
import { Footer } from './components/Footer';
import { Nav } from './components/Nav';
import { Body } from './components/Body';
import run from './initializer';

function App() {
  useEffect(() => {
    run()
  }, [])
  return (
    <div id="App">
      <canvas id="bg"></canvas>
      <div id="main">
        <Nav/>
        <Body/>
        <Footer />
      </div>
    </div>
  );
}

export default App;
