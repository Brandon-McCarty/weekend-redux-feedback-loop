import React from 'react';
import './App.css';
import { HashRouter as Router, Route } from 'react-router-dom';
import { useState } from 'react';



// Import Components
import Header from '../Header/Header';
import Feeling from '../Feeling/Feeling';
import Understanding from '../Understanding/Understanding';
import Support from '../Support/Support';
import Comments from '../Comments/Comments';
import ReviewFeedback from '../ReviewFeedback/ReviewFeedback';
import Success from '../Success/Success';


function App() {

  const [rating, setRating] = useState('');

  // Set the rating as the selected radio input value
  const handleChange = (event) => {
    const target = event.target;
    if (target.checked) {
      setRating(target.value);
    }
  };

  return (
    <Router>
      <div className='App'>
        <Route path='/'>
          <Header />
        </Route>

        <Route path='/' exact>
          <Feeling
            handleChange={handleChange}
            rating={rating}
            setRating={setRating}
          />
        </Route>

        <Route path='/understanding'>
          <Understanding
            handleChange={handleChange}
            rating={rating}
            setRating={setRating}
          />
        </Route>

        <Route path='/support'>
          <Support
            handleChange={handleChange}
            rating={rating}
            setRating={setRating}
          />
        </Route>

        <Route path='/comments'>
          <Comments
            rating={rating}
            setRating={setRating}
          />
        </Route>

        <Route path='/review'>
          <ReviewFeedback />
        </Route>

        <Route path='/success'>
          <Success 
          rating={rating}
          setRating={setRating}
          />
        </Route>
      </div>
    </Router>
  );
}

export default App;
