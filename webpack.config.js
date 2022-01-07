const path = require('path');

module.exports = {
  entry: {
      app: './src/index.js',
      lesson1: './src/lesson1.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      }
    ]
  }
};