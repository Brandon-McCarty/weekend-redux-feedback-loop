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
const feedback = (state = {
    feeling: null,
    understanding: null,
    support: null,
    comments: ''
},
    action) => {
    switch (action.type) {
        case "ADD_FEELING_FEEDBACK":
            state.feeling = Number(action.payload);
            return state;
        case "ADD_UNDERSTANDING_FEEDBACK":
            state.understanding = Number(action.payload);
            return state;
        case "ADD_SUPPORT_FEEDBACK":
            state.support = Number(action.payload);
            return state;
        case "ADD_COMMENT_FEEDBACK":
            state.comments = action.payload;
            return state;
        case "SUBMIT_FEEDBACK":
            return {
                feeling: null,
                understanding: null,
                support: null,
                comments: ''
            };
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
