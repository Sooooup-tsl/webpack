// var HtmlWebpackPlugin = require('html-webpack-plugin');

// module.exports = {
//     entry: {
//         main: './src/js/main.js',
//         calc: './src/js/calc.js'
//     },
//     output: {
//         //__dirname，就是当前webpack.config.js文件所在的绝对路径
//         path: __dirname + '/dist', //输出路径，要用绝对路径
//         filename: 'js/[id]-[name]-[hash].bundle.js' //打包之后输出的文件名
//         // filename : '[chunkhash].bundle.js' //打包之后输出的文件名
//     },
//     plugins: [new HtmlWebpackPlugin({
//         template: './index.html',
//         filename: 'index-[hash].html',  // 打包生成的文件名，还可以加目录，默认没有写的时候是index.html
//         title: 'webpack by Sooooup',
//         date: new Date(),
//         userName: 'Sooooup',
//         inject: false, // inject：有4个值: true | 'head' | 'body' | false 如果设置为head, 就是把js引入放在head标签里面, 如果设置为body，就是把js引入放在body里面， false: 不会引入js文件  true:引入js文件
//         minify: {
//             removeComments: true, // 去掉注释
//             collapseWhitespace   :   true //去掉空行
//         }
//     })]
// };

// chunks
var HtmlWebpackPlugin = require('html-webpack-plugin');
var HtmlWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin');

module.exports = {
    entry : {
        main : './src/js/main.js',
        index : './src/js/index.js',
        list : './src/js/list.js',
        detail : './src/js/detail.js'
    },
    output : {
        //__dirname，就是当前webpack.config.js文件所在的绝对路径
        path : __dirname + '/dist', //输出路径，要用绝对路径
        filename : 'js/[name]-[hash].bundle.js', //打包之后输出的文件名
    },
    plugins: [
        new HtmlWebpackPlugin({
            template : './index.html',
            title : '首页',
            filename : 'index.html',
            inject : true,
            inlineSource : '.(js|css)$' //全部内嵌
        }),
        new HtmlWebpackInlineSourcePlugin(),
        new HtmlWebpackPlugin({
            template : './index.html',
            title : '列表页',
            filename : 'list.html',
            inject : true,
            chunks : ['main', 'list']
        }),
        new HtmlWebpackPlugin({
            template : './index.html',
            title : '文章详情页',
            filename : 'detail.html',
            inject : true,
            chunks : ['main', 'detail']
        })
    ]
};