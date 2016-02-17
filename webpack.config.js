var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var projectConfig = {
  context: path.resolve('src'),
  assetsPath: __dirname + '/dist/assets/'
}


var config = {
  context: projectConfig.context,
  entry: './index.js',
  output: {
    path: projectConfig.assetsPath,
    publicPath: '/assets/',
    filename: './js/bundle.js'
  },

  devtool: 'eval',

  plugins: [
    new ExtractTextPlugin('./css/styles.css')
  ],

  module: {
    loaders: [
      {test: /\.js$/, loader: 'ng-annotate!babel?presets[]=es2015', exclude: /node_modules/},
      {test: /\.html$/, loader: 'raw', exclude: /node_modules/},
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css!sass'),
        exclude: /node_modules/
      },
      {
        test: /\.(woff|woff2|ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader?name=/res/[name].[ext]?[hash]'
      }
    ]
  }
};

module.exports = config;
