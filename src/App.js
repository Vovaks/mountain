import React, { Component } from 'react';
import {BrowserRouter, Route} from  'react-router-dom';
import i18next from "i18next";

import Header from 'components/header/index.js';
import Menu from 'containers/menu/index.js';

/*pages*/
import Home from 'components/pages/home/index.js';
import Tv from 'components/pages/tv/index.js';
import Sales from 'components/pages/sales/index.js';
import Weather from 'components/pages/wearther/index.js';
import User from 'components/pages/user/index.js';
import Signin from 'components/pages/signin/index.js';
import Signup from 'components/pages/signup/index.js';

/*actions*/

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            language:"en"
        };
    }

    componentWillMount() {
        this.setLanguage(this.state.language);
    }

    /**
     * setLanguage
     * @param language
     * Now load from json
     * You can load translation for every page or for all pages
     * Read in https://www.i18next.com
     */
    setLanguage(language) {
        i18next.init({
            lng: language,
            resources: {
                "ru": {
                    "translation":
                        require('translate/ru.json')
                },
                "en": {
                    "translation":
                        require('translate/en.json')
                },
            },
        });
    }

    /**
     * OnChange for Language Selector
     * @param event
     */
    handleChangeLanguage = (event) => {
        this.setState({lng: event.target.value});
        this.setLanguage(event.target.value);
    };

  render() {
    return (
        <BrowserRouter>
            <div className="App">
                <select
                    id="lang"
                    onChange={this.handleChangeLanguage}
                    value={this.state.value}
                >
                    <option value='en'>English</option>
                    <option value='ru'>Russian</option>
                </select>

                {/*Header*/}
                <header className="App-header">
                    <Header/>
                </header>
                {/*Menu*/}
                <div className={'menu'}>
                    <Menu/>
                </div>
                {/*Block*/}
                <div className={'block'}>
                    <div className="content">
                        <div>
                            <Route exact path='/' component={Home} />
                            <Route path='/tv' component={Tv} />
                            <Route path='/sales' component={Sales} />
                            <Route path='/weather' component={Weather} />
                            <Route path='/user' component={User} />
                            <Route path='/signin' component={Signin} />
                            <Route path='/signup' component={Signup} />
                        </div>
                        {/*<p className="App-intro">*/}
                            {/*To get started, edit <code>src/App.js</code> and save to reload.*/}
                        {/*</p>*/}
                    </div>
                </div>
            </div>
        </BrowserRouter>
    );
  }
}
export default App;
