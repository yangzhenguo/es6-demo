/**
 * Created by Sam on 2019/5/21.
 */
const path = require('path');
const { DefinePlugin } = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const fs = require('fs');

module.exports = {
    mode: 'development',
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            test: /\.js$/,
            use: 'babel-loader'
        }, {
            test: /\.css$/,
            use: [
                'style-loader',
                'css-loader',
            ]
        }, {
            test: /\.scss$/,
            use: [
                'style-loader',
                'css-loader',
                'sass-loader'
            ]
        }, {
            test: /\.vue$/,
            use: 'vue-loader'
        }]
    },
    plugins: [
        new DefinePlugin({
            'log': process.env.NODE_ENV === 'production' ? () => {} : function (msg) { console.log(msg) }
        }),
        new HtmlWebpackPlugin({
            template: './index.html'
        })
    ],
    devServer: {
        headers: {
            'X-Custom-Foo': 'bar',
            'Access-Control-Allow-Origin': '*'
        },
        before: (app , server) => {
            app.get('/some/path', (req, res) => {
                res.json({custom: 'response'})
            }).get('/package', (req, res) => {
                res.sendFile(path.resolve(__dirname, './package.json'))
            }).get('/package-lock', (req, res) => {
                res.sendFile(path.resolve(__dirname, './package-lock.json'))
            })
        },
        open: true
    }
}