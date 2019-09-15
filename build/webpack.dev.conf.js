const webpackBaseConf = require('./webpack.base.conf.js');
const merge = require('webpack-merge');
const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const loaderUtil = require('./cssLoader');

module.exports = merge(webpackBaseConf, {
    plugins: [
        new htmlWebpackPlugin({
            name: 'index.html',
            template: path.resolve(__dirname, '../public/index.html'),
        }),
    ],
    module: {
        rules: loaderUtil.styleLoaders({
        sourceMap: config.dev.cssSourceMap,
        usePostCSS: true,
        }),
    },
    devServer: {
        contentBase: path.join(__dirname, "../dist"),
        compress: true,
        port: 8080
    }
});