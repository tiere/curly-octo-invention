const autoprefixer = require('autoprefixer');

module.exports = {
  entry: './src/app.js',
  output: {
    path: './bin',
    publicPath: '/assets/',
    filename: 'app.bundle.js',
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/,        loader:  'babel-loader' },
      { test: /\.css$/,                                loaders: ['style', 'css', 'postcss'] },
      { test: /\.scss$/,                               loaders: ['style', 'css', 'postcss', 'sass'] },
      { test: /\.woff2?(\?v=[0-9]\.[0-9]\.[0-9])?$/,   loader:  "url?limit=10000" },
      { test: /\.(ttf|eot|svg)(\?[\s\S]+)?$/,          loader:  'file' },
      { test: /bootstrap-sass\/assets\/javascripts\//, loader:  'imports?jQuery=jquery' },
    ],
  },
  postcss: [autoprefixer],
};
