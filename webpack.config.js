const path = require('path');

module.exports = {
  entry: {
    // basic: path.resolve('./demo/basicPatch.tsx'),
    button: path.resolve('./demo/buttonPatch.tsx')
  },
  devtool: 'inline-source-map',
  module: {
  rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.node$/,
        use: 'node-loader'
      }
    ]
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ]
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, './dist')
  },
  mode: 'development',
};
