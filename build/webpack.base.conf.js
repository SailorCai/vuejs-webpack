const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const PluginDemo = require('./plugin_demo.js');

// 基础webpack配置
module.exports = {
    entry: {
        main: './src/main.js',
        entry1: './src/entry1.js'
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'assets/[name].bundle.js',  // 决定入口chunk的文件名
        chunkFilename: 'assets/[name].[hash:7].js',   // 决定非入口chunk的文件名
    },
    plugins: [
        new VueLoaderPlugin(),
        new CleanWebpackPlugin(),
        new BundleAnalyzerPlugin(),
        new PluginDemo(),
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [{
                    loader: 'babel-loader',
                    options: {
                        cacheDirectory: true
                    }
                }],
            },
            {
                test: /\.vue$/,
                use: 'vue-loader',
            },
            {
                test: /\.(jp|pn|jpe)g$/,
                use: 'url-loader'
            }
        ],
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
            '@': path.resolve(__dirname, '../src')
        }
    }
};