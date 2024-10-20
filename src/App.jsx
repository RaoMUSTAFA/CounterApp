import { useState } from 'react';
import './App.css';

function CounterApp() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <div className="container">
      <h1>Counter App</h1>
      <p>Count: {count}</p>
      <button className="btn-success" onClick={handleIncrement}>
        Increment
      </button>
      <button className="btn-danger" onClick={handleDecrement} disabled={count === 0}>
        Decrement
      </button>
      <button className="btn-secondary" onClick={handleReset} disabled={count === 0}>
        Reset
      </button>
    </div>
  );
}

export default CounterApp;