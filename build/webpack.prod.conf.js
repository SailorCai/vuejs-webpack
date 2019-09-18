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
            chunks: 'all',  // 决定哪些chunk会被优化 
            minSize: 30000, // 模块的最小体积 
            maxSize: 0, // 模块的最大体积
            minChunks: 1,   // 模块的最小被引用次数
            maxAsyncRequests: 5,    // 按需加载的最大并行请求数
            maxInitialRequests: 3,  // 一个入口最大并行请求数
            automaticNameDelimiter: '~',    // 文件名的连接符
            automaticNameMaxLength: 30, // 生成的文件名字的最大长度
            name: true, // 切割出模块的name，设置为true会根据chunks和缓存组的key来自动命名
            cacheGroups: {
                vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    priority: -10
                },
                /* elementUI: {
                    test: /[\\/]node_modules[\\/]_element-ui/,
                    priority: -9
                }, */
                default: {
                    minChunks: 2,
                    priority: -20,
                    reuseExistingChunk: true
                }
            }
        },
        runtimeChunk: {
            name: 'runtime'
        }
    },
});

