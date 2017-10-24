import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import App from '../client/components/App';

const renderApp = ({ clientData, serverData }) => (req, res) => {
  const context = {};
  // prettier-ignore
  const markup = renderToString(<StaticRouter location={req.url} context={context}><App /></StaticRouter>); // eslint-disable-line
  res.send(`
      <head>
          <meta charset="utf-8">
          <meta http-equiv="x-ua-compatible" content="ie=edge">
          <title></title>
          <meta name="description" content="">
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
      </head>
      <body>
        <div id="root">${markup}</div>
        <script src="bundle.js"></script>
      </body>
    </html>
`);
};

export default renderApp;
