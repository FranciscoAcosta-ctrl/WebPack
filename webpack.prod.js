const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtract = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const CssMinimizer = require('css-minimizer-webpack-plugin');
const TerserWebpack = require('terser-webpack-plugin');

module.exports = {
    mode: "production",

    output: {
        clean: true,
        filename: 'main.[contenthash].js',
    },

    module:{
        rules: [
            {
                test: /\.html$/,
                loader: 'html-loader',
                options: {
                    sources: false
                }
            },
            {
                test: /\.css$/,
                exclude: /style.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /style.css$/,
                use: [ MiniCssExtract.loader, 'css-loader'],
            },
            {
                test: /\.(png|jpe?g|git)$/,
                use: ['file-loader']
            },
            {
                test: /\.m?js$/,
                exclude: /node_module/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    },
    optimization:{
        minimize: true,
        minimizer: [
            new CssMinimizer(),
            new TerserWebpack(),
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            title: 'Mi Webpack App',
            filename: 'index.html',
            template: './src/index.html'
        }),
        new MiniCssExtract({
            filename: '[name].[fullhash].css',
            ignoreOrder: false
        }),
        new CopyPlugin({
            patterns:[
            {from: 'src/assets/', to: 'assets/'}
        ]
        }),
    ]
}