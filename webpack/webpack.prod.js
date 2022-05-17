const path = require("path")
const { join, resolve } = require("path")
const { VueLoaderPlugin } = require('vue-loader')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  mode: 'production',
  entry: path.join(__dirname, "../src/dust.js"),
  output: {
    filename: 'dust.js',
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
        test: /\.(png|jpg|gif)$/,
        type: 'asset',
        generator: {
          filename: 'static/[name][ext]',
        },
        parser: {
          dataUrlCondition: {
            maxSize: 1024,//小于6kb的图片内联处理
          }
        }
      },
      {
        test: /\.svg$/,
        loader: 'svg-sprite-loader',
        include: [resolve('src/assets/svg')],
        options: {
          symbolId: 'icon-[name]',
          outputPath: 'static/sprites/',
        }
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.(sa|sc)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader",
        ],
      },
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
    new MiniCssExtractPlugin({ chunkFilename: 'css/[id].css' })
  ],
  optimization: {
    splitChunks: {
      chunks: "async",
      minSize: 30000,
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      automaticNameDelimiter: '~',
      name: false,
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true
        }
      }
    }
  },
  resolve: {
    extensions: ['.vue', '.js', '.json'],
    alias: {
      '@': join('../src'),
    }
  },
}