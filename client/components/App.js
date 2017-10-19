import React, { Component } from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';

import PageOne from './PageOne';
import PageTwo from './PageTwo';

class App extends Component {
  componentDidMount() {
    console.log('Hello from app and JS!');
  }
  render() {
    return (
      <Switch>
        <Route exact path="/" component={PageOne} />
        <Route component={PageTwo} />
      </Switch>
    );
  }
}

export default App;
