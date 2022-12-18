const webpack = require('webpack');
const RemovePlugin = require('remove-files-webpack-plugin');

module.exports = {
  target: 'webworker',
  mode: 'production',
  optimization: {
    usedExports: true,
  },
  performance: {
    hints: false,
  },
  context: __dirname,
  output: {
    path: __dirname + '/dist',
    publicPath: 'dist',
    filename: 'worker.js',
  },
  entry: './index.js',
  optimization: {
    concatenateModules: true,
    minimize: true,
  },
  plugins: [
    new webpack.optimize.ModuleConcatenationPlugin(),
    new RemovePlugin({
      before: {
        include: ['./dist'],
      },
    }),
  ],
  module: {
    rules: [
      {
        test: /\.m?js$/,
        loader: 'babel-loader',
        exclude: /\/node_modules\//,
        options: {
          presets: ['@babel/preset-env', '@babel/preset-flow'],
          plugins: [],
        },
      },
    ],
  },
};
