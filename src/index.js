import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';

import reducers from 'reducers/index.js';
import App from "./App.js";

/* styles*/
import './styles/App.css';
import './styles/main.scss';

// import registerServiceWorker from './registerServiceWorker';

const store = createStore(reducers, composeWithDevTools(
    applyMiddleware(thunk)
));

// const history = syncHistoryWithStore(browserHistory, store);
ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);