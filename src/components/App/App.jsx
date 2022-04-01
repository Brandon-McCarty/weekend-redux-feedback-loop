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
        <Route path='/'>
          <Header />
        </Route>

        <Route path='/feeling'>
          <Feeling />
        </Route>

        <Route path='/understanding'>
          <Understanding />
        </Route>

        <Route path='/support'>
          <Support />
        </Route>

        <Route path='/comments'>
          <Comments />
        </Route>
        
        <Route path='/review'>
          <ReviewFeedback />
        </Route>
      </div>
    </Router>
  );
}

export default App;
