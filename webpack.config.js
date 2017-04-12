'use strict'
const path = require('path')

var HtmlWebpackPlugin = require('html-webpack-plugin')
var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: path.resolve(__dirname, 'app/index.html'),
  filename: 'index.html',
  inject: 'body'
})

module.exports = {
  entry: [
    './app/index.js'
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index_bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  plugins: [HTMLWebpackPluginConfig]
}
