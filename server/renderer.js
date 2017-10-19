import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router';
import PageOne from '../client/components/PageOne';
import App from '../client/components/App';

const renderApp = (req) => {
  const context = {};
  return renderToString(
    // eslint-disable-line
    <StaticRouter context={context} location={req.url}>
      <App />
    </StaticRouter>, //eslint-disable-line
  ); //eslint-disable-line
};
export default renderApp;
