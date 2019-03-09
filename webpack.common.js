const path = require('path');

module.exports = {
  entry: './src/index.tsx',
  output: {
      filename: 'bundle.[hash].js',
      path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
          test: /\.(png|svg|jpg|gif)$/,
          use: [
              'file-loader',
          ],
      },
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx', 'ts', 'tsx'],
  }
};