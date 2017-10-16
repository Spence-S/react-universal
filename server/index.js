import fs from 'fs';
import path from 'path';
import express from 'express'; // eslint-disable-line
import morgan from 'morgan';

import React from 'react';
import { renderToString } from 'react-dom/server';
import App from '../client/components/App';

const app = express();

app.use(morgan('dev'));

app.use(express.static(path.join(__dirname, '../public')));

app.get('/home', (req, res) => {
  const html = renderToString(<App />);
  fs.readFile(path.join(__dirname, '../public/index.html'), 'utf8', (err, data) => {
    if (err) throw err;
    const document = data.replace('<div id="root"></div>', `<div id="root">${html}</div>`);
    res.send(document);
  });
});

app.listen(process.env.PORT, () => {
  console.log(`listening on ${process.env.PORT}`);
});
