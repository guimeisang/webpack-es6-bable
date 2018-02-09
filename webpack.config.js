var path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'stage-1']
        }
      }
    ]
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'), // 静态文件目录位置，只有当你需要在webpack-dev-server本地服务器查看或引用静态文件时用到。类型：boolean | string | array, 建议使用绝对路径
    hot: true, // 模块热更新。依赖于HotModuleReplacementPlugin
    compress: true,
    port: 3000,
    noInfo: true
  },
  plugins: [
    // 开启webpack全局热更新
    new webpack.HotModuleReplacementPlugin(),
    // 当接收到热更新信号时，在浏览器console控制台打印更多可读性高的模块名称等信息
    new webpack.NamedModulesPlugin(),
  ]
}
