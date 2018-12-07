const path = require('path');

module.exports = {
  // refers to the base of our app 
  entry: path.resolve(__dirname, 'src/index.jsx'),
  output: {
    filename: 'bundle.js',
    // wherever folder lives
    path: path.resolve(__dirname, 'public'),
  },
  mode: 'development',
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        },
      }
    ],
  },
//   resolve: {
//     extensions: ['.js', '.jsx'],
//   },
// this makes it so you can import js not jsx
};