const path = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './src/index.html',
  filename: 'index.html',
  inject: 'body'
})

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve('dist'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.scss$/, loaders: ['style-loader', 'css-loader', 'sass-loader'], exclude: /node_modules/ }
    ]
  },
  plugins: [HtmlWebpackPluginConfig],
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  },
  resolve: {
    alias: {
      containers: path.resolve(__dirname, 'src/containers'),
      components: path.resolve(__dirname, 'src/components'),
      routes: path.resolve(__dirname, 'src/routes'),
      themes: path.resolve(__dirname, 'src/themes')
    }
  }
}