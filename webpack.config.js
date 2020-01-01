const path = require('path');

module.exports = {
  entry: {
    // basic: path.resolve('./demo/basicPatch.tsx'),
    // button: path.resolve('./demo/buttonPatch.tsx'),
    // check_button: path.resolve('./demo/check_buttonPatch.tsx'),
    // target1: path.resolve('./demo/target1Patch.tsx'),
    // canvas: path.resolve('./demo/canvasPatch.tsx'),
    // edit: path.resolve('./demo/editPatch.tsx'),
    // cube: path.resolve('./demo/cubePatch.tsx'),
    // combo_box:  path.resolve('./demo/combo_boxPatch.tsx'),
    // image: path.resolve('./demo/imagePatch.tsx'),
    // label: path.resolve('./demo/labelPatch.tsx'),
    // rich_text: path.resolve('./demo/rich_textPatch.tsx'),
    // progress_bar: path.resolve('./demo/progress_barPatch.tsx'),
    slider: path.resolve('./demo/sliderPatch.tsx'),
  },
  // devtool: 'inline-source-map',
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
