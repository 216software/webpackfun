const path = require('path');
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: './src/index.js',
  devtool: 'source-map',
  mode: 'development',

  devServer: {
    contentBase: path.resolve(__dirname, '.'),
    hot: true
  },

  output: {
    // filename: 'main.js',
    filename: '[name].[hash].js',
    path: path.resolve(__dirname, 'dist')
  },

  module: {
    rules: [
      {

        // Test here means "when a file matches this pattern"...
        test: /\.css$/,

        // When the test passes, then use these plugins on that file.
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
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
