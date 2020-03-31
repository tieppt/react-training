import React, { useState } from 'react';
import './App.css';
import { NetworkStatus } from './components/network-status';

function App() {
  const [show, setShow] = useState(true);
  return (
    <div>
      <button onClick={() => setShow(!show)}>Toggle</button>
      <br/>
      {show && <NetworkStatus /> }
    </div>
  );
}

export default App;
