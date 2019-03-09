const path = require('path');

module.exports = {
    optimization: {
        usedExports: true,
    },
    entry: './src/index.tsx',
    output: {
        filename: 'bundle.js',
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
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
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