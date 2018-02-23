const path = require('path');
const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const common = require('./webpack.config.js');
const glob = require('glob');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const PurifyCSSPlugin = require('purifycss-webpack');

module.exports = merge(common, {
  devtool: 'source-map',
  plugins: [
    new UglifyJSPlugin({
      sourceMap: true
    }),
    new ExtractTextPlugin('[name].[contenthash].css'),
    new PurifyCSSPlugin({
      paths: glob.sync(path.join(__dirname, 'src/*.html'))
    })
  ]
})
