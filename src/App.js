import { useEffect } from 'react';
import './App.css';
import { Footer } from './components/Footer';
import { Nav } from './components/Nav';
import { Body } from './components/Body';
import run from './initializer';

function App() {
  useEffect(() => {
    run()
    console.error("If you see any warning(s), it is because of this popular issue: https://www.youtube.com/watch?v=dQw4w9WgXcQ");
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
