import React from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom';

// Import Components
import Header from '../Header/Header';
import Feeling from '../Feeling/Feeling';
import Understanding from '../Understanding/Understanding';
import Support from '../Support/Support';
import Comments from '../Comments/Comments';
import ReviewFeedback from '../ReviewFeedback/ReviewFeedback';


function App() {

  return (
    <Router>
      <div className='App'>
        <Header />
        <Feeling />
        <Understanding />
        <Support />
        <Comments />
        <Route path='/review'>
          <ReviewFeedback />
        </Route>
      </div>
    </Router>
  );
}

export default App;
