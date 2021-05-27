import React, { useState } from 'react';
import './App.css';

const App = () => {
  let time = new Date().toLocaleTimeString();
  const [cTime, setCtime]=useState(time);

  const updateTime = () => {
    let time = new Date().toLocaleTimeString();
    setCtime(time)
  }
  setInterval(updateTime,1000)
  
  return (
    <>
    <h1> {cTime} </h1>
    
    </>
  );
}

export default App;
