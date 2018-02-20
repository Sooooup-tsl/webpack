module.exports = {
    plugins : [
        require('autoprefixer')({ // 引入autoprefixer插件
            browsers : ['last 5 versions']
        })
    ]
}