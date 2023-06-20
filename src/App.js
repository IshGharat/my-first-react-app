import React from 'react';
import { BrowserRouter,Routes,Route, Link } from 'react-router-dom';
import './App.css';
import Home from "./routes/home";
import Registry from "./routes/registry";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/registry" element={<Registry/>}/>
      </Routes>
      </BrowserRouter>    
    </div>
  );
}

export default App;
