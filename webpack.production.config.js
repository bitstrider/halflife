const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HardSourceWebpackPlugin = require('hard-source-webpack-plugin');
const AutoDllPlugin = require('autodll-webpack-plugin');
const webpack = require('webpack');
const path = require('path');

const SRC_PATH = path.resolve(__dirname, 'src');
const BUILD_PATH = path.resolve(__dirname, 'build');

module.exports = {
  entry: 'core/app',

  output: {
    path: BUILD_PATH,
    publicPath: '/',
    filename: 'bundle.js'
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader?cacheDirectory',
        include: SRC_PATH
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader?minimize'
        }),
        include: SRC_PATH
      },
      {test: /\.json$/, loader: 'json-loader', include: SRC_PATH}
    ]
  },

  resolve: {
    extensions: ['.js', '.jsx'],
    modules: ['src', 'node_modules']
  },

  plugins: [
    new HardSourceWebpackPlugin(),
    new ExtractTextPlugin('app.css'),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.DefinePlugin({
      NODE_ENV: JSON.stringify('production'),
      API_BASE: JSON.stringify('/api/')
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        drop_console: true,
        warnings: false,
        unsafe: true
      }
    }),
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      inject: 'body'
    }),
    new AutoDllPlugin({
      inject: true, // will inject the DLL bundles to index.html
      filename: '[name]_[hash].js',
      entry: {
        vendor: [
          'axios',
          'lodash/keyBy',
          'lodash/map',
          // 'moment',
          // 'normalizr',
          'react',
          // 'react-bootstrap',
          'react-dom',
          // 'react-prepare-wrapper',
          'react-redux',
          'react-router',
          'react-router-redux',
          // 'react-sequence-wrapper'
          // 'react-table',
          'redux',
          // 'redux-api-middleware',
          // 'redux-form',
          // 'redux-orm',
          // 'redux-popper',
          // 'redux-saga',
          // 'reselect'
          // 'styled-component',
          // 'semantic-ui-react',
        ]
      }
    })
  ]
};
