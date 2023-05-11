
import './App.css';
import { CounterContext } from './CounterContext';
import React,{useState} from 'react';
import Fcomponent from './Fcomponent';

function App() {
  const [counter,setCounter]=useState(0);
  const increment=()=>{
    setCounter(counter+1);
  }
  const decrement=()=>{
    setCounter(counter-1);
  }
  return (
    <div className="App">
      <h1>Counter App</h1>
      <h2>App Component</h2>
      <h3>{counter}</h3>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <CounterContext.Provider value ={{counter,setCounter}}>
        <Fcomponent/>
      </CounterContext.Provider>
    </div>
  );
}

export default App;
