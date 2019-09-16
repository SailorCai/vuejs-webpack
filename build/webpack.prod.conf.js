const webpackBaseConf = require('./webpack.base.conf.js');
const merge = require('webpack-merge');
const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(webpackBaseConf, {
    mode: 'production',
    plugins: [
        new htmlWebpackPlugin({
            name: 'index.html',
            template: path.resolve(__dirname, '../public/index.html'),
        }),
    ],
    optimization: {
        splitChunks: {
            chunks: 'all',
        }
    },
});