import React, { Component } from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import App from './App';
import PageOne from './PageOne';
import PageTwo from './PageTwo';

class RouterConfig extends Component {
  componentDidMount() {
    console.log('Hello from app and JS!');
  }
  render() {
    return (
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
  }
}

export default App;
