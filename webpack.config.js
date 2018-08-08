const path = require('path');
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: './src/index.js',
  devtool: 'source-map',

  devServer: {
    contentBase: path.resolve(__dirname, '.'),
    hot: true
  },

  output: {
    // filename: 'main.js',
    filename: '[name].[hash].js',
    path: path.resolve(__dirname, 'dist')
  },

  plugins: [

    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html'
    }),

    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]

};
