import React, { Component } from 'react';
import Menu from 'containers/menu/index'
import logo from './logo.svg';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
            <select
                id="lang"
                // onChange={this.handleChangeLanguage}
                // value={this.state.value}
                value='en'
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
                  <p className="App-intro">
                      {/*{i18next.t('test_message')}*/}
                  </p>
                  <p className="App-intro">
                      To get started, edit <code>src/App.js</code> and save to reload.
                  </p>
                  {/*<Route exact path="/" component={Main}/>*/}
                  {/*<Route path="/weather" component={Weather}/>*/}
              </div>
          </div>
      </div>
    );
  }
}

export default App;
