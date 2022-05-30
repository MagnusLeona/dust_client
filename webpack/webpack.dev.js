const path = require("path")
const { join, resolve } = require("path")
const { VueLoaderPlugin } = require('vue-loader')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const FriendlyErrorsPlugin = require("friendly-errors-webpack-plugin");

const port = 443;

module.exports = {
  mode: 'development',
  stats: 'errors-only',//仅错误时显示logo
  entry: path.join(__dirname, "../src/dust.js"),
  output: {
    filename: 'dust.js',
    path: resolve(__dirname, "dist/assets"),
    publicPath: "/dust/",
    chunkFilename: "js/[name].bundle.js",
    clean: true,
  },
  devtool: 'source-map',
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
        test: /\.(png|jpg|gif)$/,
        type: 'asset',
        parser: {
          dataUrlCondition: {
            maxSize: 16 * 1024,//小于6kb的图片内联处理
          }
        }
      },
      {
        test: /\.svg$/,
        loader: 'svg-sprite-loader',
        include: [resolve('src/assets/svg')],
        options: {
          symbolId: 'icon-[name]'
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
      {
        test: /\.md$/,
        use: [
          { loader: "html-loader" },
          { loader: "markdown-loader", options: {} }
        ]
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, '../public/index.html'),
      filename: 'index.html',
      title: 'Dust',
      favicon: path.join(__dirname, '../public/favicon.ico'),
      inject: true
    }),
    new FriendlyErrorsPlugin({
      compilationSuccessInfo: {
        messages: [
          `>>>>>>>>>>\t||\tApplication Is Runing\t||\t<<<<<<<<<<`,
        ],
        clearConsole: true,
      },
    })
  ],
  resolve: {
    extensions: ['.vue', '.js', '.json'],
    alias: {
      '@': join('../src'),
    }
  },
  devServer: {
    host: "localhost",
    port: port,
    historyApiFallback: {
      index: '/dust/index.html'
    },
    static: {
      directory: resolve(__dirname, 'public'),
      publicPath: '/dust/',
    },
    proxy: {
      "/api": {
        target: "http://www.xxx.com:8080/api",
        secure: true, // 如果是https接口，需要配置这个参数
        changeOrigin: true,
        pathRewrite: { "^/finchinaAPP": "" },
      },
    },
  },
}