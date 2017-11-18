const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HardSourceWebpackPlugin = require('hard-source-webpack-plugin');
const AutoDllPlugin = require('autodll-webpack-plugin');
const webpack = require('webpack');
const path = require('path');

const SRC_PATH = path.resolve(__dirname, 'src');
const BUILD_PATH = path.resolve(__dirname, 'build');

module.exports = {
  entry : {
    app: [
      'react-hot-loader/patch' /* makes react components hot reloadable */,
      'webpack-hot-middleware/client' /* connects to webpack-hot-middleware server to recieve hot updates */,
      'core/app'
    ],
    mimic: 'utils/mimic'
  },

  output: {
    path: BUILD_PATH,
    publicPath: '/',
    filename: '[name].js'
  },

  devtool: 'source-map',

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader?cacheDirectory',
        include: SRC_PATH
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader?sourceMap',
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
      NODE_ENV: JSON.stringify('development'),
      API_BASE: JSON.stringify('/api/')
    }),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      filename: 'index.html',
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
          'mimic',
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
          // 'semantic-ui-react'
        ]
      }
    })
  ]
};
