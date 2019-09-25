const webpackBaseConf = require('./webpack.base.conf.js');
const merge = require('webpack-merge');
const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(webpackBaseConf, {
    plugins: [
        new htmlWebpackPlugin({
            name: 'index.html',
            template: path.resolve(__dirname, '../public/index.html'),
        }),
    ],
    module: {
        rules: [
            {
                test: /\.(sc|sa|c)ss$/,
                use: ['vue-style-loader','css-loader', 'postcss-loader', 'sass-loader']
            },
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, "../dist"),
        compress: true,
        port: 8080
    }
});