import './styles/index.css';

import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import {BrowserRouter, Route} from  'react-router-dom'
import {Provider} from 'react-redux';

import reducers from 'reducers/index.js';

/*pages*/
import Home from './node_modules/components/home/index.js';
import User from './node_modules/components/user/index.js';
import Menu from 'containers/menu/index'

/* styles*/
import './styles/App.css';
import './styles/index.css';
import './styles/main.scss';

import logo from './logo.svg';

// import registerServiceWorker from './registerServiceWorker';

const store = createStore(reducers, composeWithDevTools(
    applyMiddleware(thunk)
));

// const history = syncHistoryWithStore(browserHistory, store);
ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>

            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <select
                        id="lang"
                        // onChange={this.handleChangeLanguage}
                        // value={this.state.value}
                    >
                        <option value='en'>English</option>
                        <option value='ru'>Russian</option>
                    </select>
                    <h1 className="App-title">Welcome to React</h1>

                </header>

                {/*Menu*/}
                <div className={'menu'}>
                    <Menu/>
                </div>

                {/*Block*/}
                <div className={'block'}>
                    <div className="content">
                        <div>
                            {/*<Route path='/' component={App} />*/}
                            <Route exact path='/' component={Home} />
                            <Route path='/user' component={User} />
                        </div>
                        <p className="App-intro">
                            To get started, edit <code>src/App.js</code> and save to reload.
                    </p>
                        {/*<Route exact path="/" component={Main}/>*/}
                        {/*<Route path="/weather" component={Weather}/>*/}
                    </div>
                </div>
            </div>
        </BrowserRouter>

    </Provider>,
    document.getElementById('root')
);