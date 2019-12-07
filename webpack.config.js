const path = require('path');

module.exports = {
  entry: './demo/target1.tsx',
  devtool: 'inline-source-map',
  module: {
  rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
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
