import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './App.css';
import Navbar from './components/Layout/Navbar';
import Home from './components/Home';
import Line from './components/Line/Line';
import CreateLine from './components/Line/CreateLine';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/Create' component={CreateLine} />
            <Route path='/:line_id' component={Line} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
