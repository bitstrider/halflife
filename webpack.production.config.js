const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const SRC_PATH = path.resolve(__dirname, 'src')
const BUILD_PATH = path.resolve(__dirname, 'build')

module.exports = {

    entry : {
        app: 'core/app',
    },

    output : {
        publicPath : '/',
        path : BUILD_PATH,
        filename: '[name].js',
        chunkFilename: '[id].chunk.js',
    },

    module : {
        loaders : [
            {
                test : /\.(js|jsx)?$/,
                include: SRC_PATH,
                loader : 'babel'
            },
            {
                test : /\.css$/,
                loader : ExtractTextPlugin.extract('style', 'css?minimize')
            },
        ]
    },

    resolve : {
        extensions : ['', '.js', '.jsx'],
        modulesDirectories : ['src', 'node_modules']
    },

    plugins : [
        new webpack.NoErrorsPlugin(),
        new ExtractTextPlugin('styles.css'),
        new webpack.optimize.UglifyJsPlugin({
            compress : {
                warnings : false,
                drop_console : true,
                unsafe : true
            }
        }),
        new HtmlWebpackPlugin({
            template : './src/index.html',
            inject : 'body'
        })
    ]
};
