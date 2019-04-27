const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        polyfill: 'babel-polyfill',
        app: './src/index.js',
        'function': './function.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
                test: /\.html$/,
                exclude: /node_modules/,
                use: 'html-loader'
            },
            {
                test: /\.(png|jpg|jpeg|gif)$/,
                use: 'file-loader'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html',
            chunks: ['polyfill', 'app']
        }),
        new HtmlWebpackPlugin({
            template: './function.html',
            filename: 'function.html',
            chunks: ['function']
        })
    ]
};
