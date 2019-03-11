const merge = require('webpack-merge');
const common = require('./webpack.common');
const webpack = require('webpack');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.(css|scss)$/,
        use: [
          'style-loader', 
          'css-loader', 
          'sass-loader'
        ],
      },
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
});

