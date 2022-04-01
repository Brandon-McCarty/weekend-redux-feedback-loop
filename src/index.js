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
const feedback = (state = [], action) => {
    switch (action.type) {
    case "ADD_FEELING_FEEDBACK":
        state[0] = Number(action.payload);
        return state;
    default:
        return state;
    }
}

// STORE
const store = createStore(
    combineReducers({
        feedback,
    }),
    applyMiddleware(logger)
)

ReactDOM.render(
<Provider store={store}>
<App />
</Provider>, 
document.getElementById('root'));
registerServiceWorker();
