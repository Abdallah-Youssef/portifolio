import { useEffect, useState } from 'react';
import './App.css';
import { Footer } from './components/Footer';
import { Nav } from './components/Nav';
import { Body } from './components/Body';
import run from './initializer';

function App() {
    const [result, setResult] = useState("")

    const handleClick = () => {
        fetch('http://156.194.141.62:8000')
        .then(response => response.text())
        .then(data => setResult(result));
    }

    useEffect(() => {
        run()
        console.error("If you see any warning(s), it is because of this popular issue: https://www.youtube.com/watch?v=dQw4w9WgXcQ");
    }, [])
    return (
        <div id="App">
            <canvas id="bg"></canvas>

            <div id="main">
                <Nav />
                <Body />
                <Footer />
            </div>


            <button onClick={handleClick}>Press me</button>
            <div>{result}</div>
        </div>
    );
}

export default App;
