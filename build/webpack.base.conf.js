const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

// 基础webpack配置
module.exports = {
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, '../dist'),
        chunkFilename: 'assets/[name].bundle.js',
        filename: 'assets/[name].[hash:7].js',
    },
    plugins: [
        new VueLoaderPlugin(),
        new CleanWebpackPlugin(),
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader',
            },
            {
                test: /\.vue$/,
                use: 'vue-loader',
            },
            {
                test: /\.(sc|sa|c)ss$/,
                use: ['vue-style-loader','css-loader', 'postcss-loader', 'sass-loader']
            },
        ],
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
            '@': path.resolve(__dirname, '../src')
        }
    }
};