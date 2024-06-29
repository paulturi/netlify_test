import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
    <h1>WTF 202</h1>
    <h2>{count}</h2>
    <button onClick={() => setCount(prev=> prev + 1)}>Increment Count</button>
    </>

  );
}

export default App;
