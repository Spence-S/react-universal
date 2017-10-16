const path = require('path');

module.exports = {
  // resolve: {
  //   modules: [path.resolve(__dirname, './lib'), path.resolve(__dirname, './node_modules')],
  // },
  entry: ['babel-polyfill', './client/index.js'],
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: 'babel-loader',
      },
    ],
  },
};
