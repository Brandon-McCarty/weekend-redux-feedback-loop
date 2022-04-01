import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

// REDUX Imports
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

// REDUCERS

// STORE
const store = createStore(
    combineReducers({

    }),
    applyMiddleware(logger)
)

ReactDOM.render(
<Provider store={store}>
<App />
</Provider>, 
document.getElementById('root'));
registerServiceWorker();
