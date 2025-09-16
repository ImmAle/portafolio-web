import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import React from 'react';
import PortfolioWeb from './components/PortfolioWeb'
import ParticlesBackground from "./components/ParticlesBackground";
import './App.css'

function App() {
  return (
    <div className="App">
      <ParticlesBackground />
      <PortfolioWeb />
    </div>
  );
}

export default App;