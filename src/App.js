import { useEffect } from 'react';
import './App.css';
import { Footer } from './Footer';
import run from './initializer';

function App() {
  useEffect(() => {
    run()
  }, [])
  return (
    <div id="App">
      <canvas id="bg"></canvas>
      <Footer/>
    </div>
  );
}

export default App;
