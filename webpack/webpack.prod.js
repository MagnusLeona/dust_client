const path = require("path")
const { join, resolve } = require("path")
const { VueLoaderPlugin } = require('vue-loader')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'production',
  entry: path.join(__dirname, "../src/dust.js"),
  output: {
    filename: 'index.html',
    path: resolve(__dirname, "../dist"),
    chunkFilename: "js/[name].bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        use: 'babel-loader'
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        type: 'asset',
        parser: {
          dataUrlCondition: {
            maxSize: 6 * 1024 * 1024,//小于6kb的图片内联处理
          }
        }
      },
      {
        //解析器的执行顺序是从下往上(先css-loader再style-loader)
        test: /\.css$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              esModule: false,
              modules: {
                auto: false, //modules 开关,移动端多页面模式关闭class hash命名
                localIdentName: "[local]_[hash:base64:8]", // 自定义生成的类名
              },
            },
          },
        ],
      },
      {
        test: /\.s[ac]ss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, '../public/index.html'),
      filename: 'index.html'
    }),
  ],
  resolve: {
    extensions: ['.vue', '.js', '.json'],
    alias: {
      '@': join('../src'),
    }
  },
}