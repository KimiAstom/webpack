const htmlWebpackPlugins = require('html-webpack-plugin')
const path = require('path')
module.exports = {
  entry: [path.resolve(__dirname, 'src/js/index.js'),path.resolve(__dirname, 'src/html/index.html')],
  output: {
    filename: "js/index.js",
    path: path.resolve(__dirname, 'build')
  },
  module: {
    rules: [
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader']
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(jpg|png|gif)$/,
        loader: "url-loader",
        options: {
          limit: 8 * 1024,
          name: '[hash:10].[ext]',
          esModule: false,
          outputPath: 'image'
        }
      },
      {
        test: /\.html$/,
        loader: "html-loader",
        options: {
          esModule: false
        }
      },
      {
        exclude: /\.(html|css|js|less|png|jpg|gif)$/,
        loader: "file-loader",
        options: {
          name: '[hash:10].[ext]',
          outputPath: 'media'
        }
      }
    ]
  },
  plugins: [
    new htmlWebpackPlugins({
      filename: 'index.html',
      template: 'src/html/index.html'
    })
  ],
  mode: "production",
  devServer: {
    contentBase: path.resolve(__dirname, 'build'),
    compress: true,
    port: 3000,
    open: true,
    hot: true
  },
  devtool: 'eval-source-map'
}