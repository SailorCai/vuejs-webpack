class PluginDemo{
    // 构造函数可以获取到使用时给插件传入的参数
    constructor(options){
        
    };

    // webpack在注册插件的时候会调用apply方法
    apply(compiler) {
        compiler.plugin('compilation', function(compilation) {
            console.log('=执行compilation');
        });

        compiler.plugin('compile', function(compilation) {
            console.log('==执行compile');
        });

        compiler.plugin('make', function(compilation, callback) {
            console.log('===执行make');

            callback();
        });

        compiler.plugin('after-compile', function(compilation, callback) {
            console.log('====执行after-compile');

            callback();
        });

        /* compiler.plugin('seal', function(compilation) {
            console.log('=====执行seal');
        }); */

        compiler.hooks.emit.tap('eimt', (param) => {
            console.log('======执行eimt');

            // console.log(param);
        });

        /* compiler.plugin('after-eimt', function(compilation) {
            console.log('=======执行after-emit');
        }); */

        compiler.plugin('watch-run', function(watching, callback) {
            console.log('+++++依赖文件发生变化');
            callback();
        });

        compiler.plugin('done', function(watching) {
            console.log('=============done');
            // callback();
        });
    };
};

module.exports = PluginDemo;