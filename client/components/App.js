import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Menu from './Menu';

class Homepage extends Component {
  render() {
    return (
      <div>
        <Menu />
        <h1>Home</h1>
      </div>
    );
  }
}

class About extends Component {
  render() {
    return (
      <div>
        <Menu />

        <h1 style={{ color: 'black' }}>About Me</h1>
      </div>
    );
  }
}

class Contact extends Component {
  render() {
    return (
      <div>
        <Menu />

        <h1>Contact</h1>
      </div>
    );
  }
}

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </div>
    );
  }
}
