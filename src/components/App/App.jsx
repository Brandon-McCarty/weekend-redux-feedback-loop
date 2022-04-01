import React from 'react';
import axios from 'axios';
import './App.css';

// Import Components
import Header from '../Header/Header';
import Feeling from '../Feeling/Feeling';
import Understanding from '../Understanding/Understanding';

function App() {

  return (
    <div className='App'>
      <Header />
      <Feeling />
      <Understanding />
    </div>
  );
}

export default App;
