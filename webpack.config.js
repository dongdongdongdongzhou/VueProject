//这是一个 webpack的配置文件,其实就是一个 JS 文件，通过node向外暴露了一个配置对象
const path = require('path'); //导入path模块
//这是启用热更新的第二步
const webpack = require('webpack'); //导入webpack模块
//导入刚刚下载的  在内存中 生成HTML页面的插件
//只要是插件就一定要放到 plugins 节点中去
const htmlWebpackPlugin = require('html-webpack-plugin');

const VueLoaderPlugin = require('vue-loader/lib/plugin');


module.exports = {

    entry: path.join(__dirname, './src/main.js'), //入口：表示webpack要打包哪个文件

    output: { //输出的相关文件配置
        path: path.join(__dirname, './dist'), //指定打包好的文件，输出到哪个目录中去
        filename: 'bundle.js' //这是指定 输出文件的名称
    },
    devServer: {
        open: true, //设置编译完自动打开浏览器
        port: 3000, //设置启动地址的端口为3000
        // contentBase: 'src', //设置指定托管根目录
        hot: true //设置是否启用热更新 的 第一步
    },
    plugins: [ //配置插件的节点
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery"
        }),
        new webpack.HotModuleReplacementPlugin(), //new一个热更新的模块对象，这是启用热更新的第三步
        new htmlWebpackPlugin({ //创建一个在内存中生成 HTML 页面的插件
            template: path.join(__dirname, './src/index.html'), //指定模板页面，将来会根据指定的页面路径去生成内存中的页面
            filename: 'index.html', //指定生成页面的名称
        }),
        new VueLoaderPlugin(),
    ],
    module: { //这个节点用于配置所有第三方模块的加载器
        rules: [
            //这条语句的意思是：匹配到后缀名为 .css文件时，使用'style-loader', 'css-loader'处理该文件
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },
            { test: /\.scss$/, use: ['style-loader', 'sass-loader'] },
            { test: /\.less$/, use: ['style-loader', 'less-loader'] },
            { test: /\.(jpg|png|gif|bmp|jpeg)$/, use: 'url-loader?limit=7000&name=[name].[ext]' },
            { test: /\.(ttf|eot|svg|woff|woff2)$/, use: 'url-loader' },
            { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ },
            { test: /\.vue$/, use: 'vue-loader' },
        ]
    }
}