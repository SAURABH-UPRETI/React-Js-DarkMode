import "./App.css";
import Navbar from "./Components/Navbar";
import React, { useState } from 'react';



function App() {
  const [mode, setMode] = useState('light')// Whether dark mod is enable or not

  const toggleMod = () =>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor = 'gray';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }
  return (
    <>
      <Navbar mode={mode} toggleMod={toggleMod}/>
      </>
  );
}

export default App;
