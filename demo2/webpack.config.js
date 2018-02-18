module.exports = {
    entry : {
        main : './src/js/main.js',
        calc : './src/js/calc.js'
    },
    output : {
        //__dirname，就是当前webpack.config.js文件所在的绝对路径
        path : __dirname + '/dist', //输出路径，要用绝对路径
        filename : '[chunkhash].bundle.js' //打包之后输出的文件名
    }
};