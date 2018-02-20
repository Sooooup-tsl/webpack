var htmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');
module.exports = {
    entry: './src/main.js',
    output: {
        path: __dirname + '/dist',
        filename: 'js/[name].bundle.js',
    },
    plugins: [
        new htmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html',
            inject: true
        })
    ],
    module: {
        rules: [
            {
                test: /\.js$/, // 就是以.js结尾的文件
                exclude: /(node_modules)/, // 排除node_modules这个目录
                include: [
                    path.resolve(__dirname, "src"), //是把src目录下面的js文件作为处理的目标
                ],
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env']
                    }
                }
            },
            {
                test: /\.css$/,
                exclude: /(node_modules)/,
                use: [ 
                    'style-loader', {
                        loader : 'css-loader',
                        options : {
                            importLoaders : 1
                        },
                    },
                    'postcss-loader'
                ]
            },
            {
                test: /\.less$/,
                use: [
                    {
                        loader: "style-loader"
                    }, {
                        loader: "css-loader"
                    }, {
                        loader: "less-loader"
                    }
                ]
            },
            {
                test: /\.(html)$/,
                use: {
                    loader: 'html-loader',
                }
            },
            {
                test: /\.(ejs)$/,
                use: {
                    loader: 'ejs-loader',
                }
            },
            {
                test: /\.(png|gif|jpg|svg|jpeg)$/i,
                use: {
                    loader: 'file-loader',
                    query : {
                        name : 'assets/[hash].[ext]'
                    }
                }
            }
        ]
    }
}