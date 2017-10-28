const express = require('express');

const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpackHotServerMiddleware = require('webpack-hot-server-middleware');
const config = require('../webpack.config.js');
const logger = require('morgan');

const compiler = webpack(config);
const app = express();

app.use(logger('dev'));

app.use(webpackDevMiddleware(compiler, {
  publicPath: '/static/',
  serverSideRender: true,
}));

app.use(webpackHotMiddleware(compiler.compilers.find(compiler => compiler.name === 'client')));
app.use(webpackHotServerMiddleware(compiler, { hot: true }));

app.listen(3000);
