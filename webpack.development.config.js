const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const SRC_PATH = path.resolve(__dirname, 'src')
const BUILD_PATH = path.resolve(__dirname, 'build')

module.exports = {

    entry : {
        hot: 'webpack-hot-middleware/client',
        app: 'core/app',
        mimic: 'utils/mimic',
        vendor: [
            "axios",
            "lodash",
            "mimic",
            "react",
            "react-dom",
            "react-redux",
            "react-router",
            "react-router-dom",
            "react-router-redux",
            "react-prepare-wrapper",
            "redux",
        ]
    },

    output : {
        publicPath : '/',
        path : BUILD_PATH,
        filename: '[name].js',
        chunkFilename: '[id].chunk.js',
    },

    devtool : 'source-map',

    module : {
        loaders : [
            {
                test : /\.(js|jsx)$/,
                include: SRC_PATH,
                loader : 'babel'
            },
            {
                test : /\.css$/,
                loader : 'style!css?sourceMap'
            },
            {
                test : /\.json$/,
                include: SRC_PATH,
                loader : 'json'
            }
        ]
    },

    resolve : {
        extensions : ['', '.js', '.jsx'],
        modulesDirectories: ['src', 'node_modules']
    },

    plugins : [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.CommonsChunkPlugin("init.js"),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new HtmlWebpackPlugin({
            template : './src/index.html',
            inject : 'body'
        })

    ]
};
