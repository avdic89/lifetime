import { useState } from 'react';
import './App.css';

const average_lifetime_germany = 78.9;
const months = average_lifetime_germany / 12;
const days = average_lifetime_germany / 365;


function App() {

  const [lifetime, setLifetime] = useState(10);
  
  return (
    <>
      <div className = 'main'>
        <h1>Your remainig lifetime</h1>
        <h2>don't waste it - use it wisely</h2>
        <div className = 'lifetime'>{lifetime}</div>
      </div>
    </>
  );
}

export default App;
