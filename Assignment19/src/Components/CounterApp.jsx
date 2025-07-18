import React, { useState } from 'react';

const CounterApp = () => {
  const [count, setCount] = useState(0);

//   const increase = () => setCount(prev => prev + 1);
//   const decrease = () => setCount(prev => (prev > 0 ? prev - 1 : 0));
  const reset = () => setCount(0);

  return (
    <div style={{ textAlign: 'center', padding: '2rem' }}>
      <h2>Counter App</h2>
      <h1>{count}</h1>

      <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
        <button onClick={() => setCount(count+1)}>➕ Increase</button>
        <button onClick={()=>setCount(count-1)} disabled={count === 0}>➖ Decrease</button>
        <button onClick={reset}>🔁 Reset</button>
      </div>
    </div>
  );
};

export default CounterApp;
