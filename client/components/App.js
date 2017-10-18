import React, { Component } from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';

import PageOne from './PageOne';
import PageTwo from './PageTwo';

class App extends Component {
  componentDidMount() {
    console.log('Hello from app and JS!');
  }
  render() {
    return (
      <BrowserRouter>
        <Link to="/"> Page One </Link>
        <Link to="/PageTwo"> Page Two </Link>
        <Route exact path="/" component={PageOne} />
        <Route path="/page2" component={PageTwo} />
      </BrowserRouter>
    );
  }
}

export default App;
