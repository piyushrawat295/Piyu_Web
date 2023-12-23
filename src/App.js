import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';
//import About from './Components/About';
//import { Routes, Route, Link } from "react-router-dom";
import React, { useState } from 'react';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState('');

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert('');
    }, 1000);
  };

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      showAlert("Dark Mode Enabled", "success");
      document.title = 'Piyu-Text-in_Dark_Mode';
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode Enabled", "success");
      document.title = 'Piyu-Text-in_Light_Mode';
    }
  };

  const changegreen = () => {
    document.body.style.backgroundColor = '#35C649';
  };

  const changeyellow = () => {
    document.body.style.backgroundColor = '#CAB911';
  };

  const changered = () => {
    document.body.style.backgroundColor = '#C15031';
  };

  return (
    <>
      <Navbar title="Home" about="About" toggleMode={toggleMode} showAlert={showAlert} mode={mode} changegreen={changegreen} changered={changered} changeyellow={changeyellow} />
      <Alert alert={alert} />
      <div className="container">
        
          {/* <Routes> */}
            {/* <Route path="/" element={<TextForm showAlert={showAlert} heading="Enter Text For Analyzation" mode={mode} />} /> */}
            {/* <Route path="/about" element={<About />} /> */}
          {/* </Routes> */}

        <TextForm showAlert={showAlert} heading="Enter Text For Analyzation" mode={mode} />

      </div>
    </>
  );
}

export default App;
