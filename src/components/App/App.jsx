import React from 'react';
import axios from 'axios';
import './App.css';

// Import Components
import Header from '../Header/Header';
import Feeling from '../Feeling/Feeling';

function App() {

  return (
    <div className='App'>
      <Header />
      <Feeling />
    </div>
  );
}

export default App;
