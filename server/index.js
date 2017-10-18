import fs from 'fs';
import path from 'path';
import express from 'express'; // eslint-disable-line
import morgan from 'morgan';

import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router';
import App from '../client/components/App';

const app = express();

app.use(morgan('dev'));

app.use(express.static(path.join(__dirname, '../public')));

app.get('*', (req, res) => {
  const html = renderToString(<StaticRouter context={{}} location={req.url}>
    <App />
                              </StaticRouter>);

  fs.readFile(path.join(__dirname, '../public/home.html'), 'utf8', (err, data) => {
    if (err) throw err;
    const document = data.replace('<div id="root"></div>', `<div id="root">${html}</div>`);

    res.send(document);
  });
});

app.listen(process.env.PORT, () => {
  console.log(`listening on ${process.env.PORT}`);
});
