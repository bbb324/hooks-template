/**
 * Created by junxie on 18/5/27.
 */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const ChunksWebpackPlugin = require('chunks-webpack-plugin');
module.exports = (env = {}, argv) => {
    const isProduction = argv.mode === 'production';
    let config = {
        entry: './src/index.jsx',
        output: {
            path: path.resolve(__dirname, 'build'),
            publicPath: 'build/', // 这个相对路径是给 chunkFile 用的，
            chunkFilename: '[name].chunk.js',
            filename: 'bundle.js'
        },
        optimization: {
            minimizer: [
                // we specify a custom UglifyJsPlugin here to get source maps in production
                new UglifyJsPlugin({
                    cache: true,
                    parallel: true,
                    uglifyOptions: {
                        compress: false,
                        ecma: 6,
                        mangle: true
                    },
                    sourceMap: true
                })
            ]
        },
        devtool: (() => {
            return isProduction
                ? '' // 'hidden-source-map'
                : 'source-map';
        })(),
        plugins: [
            new HtmlWebpackPlugin({
                template: './index.html',
                filename: 'index.html'
            }),
            new webpack.DefinePlugin({
                'process.env.NODE_ENV': '"production"'
            }),
            new ChunksWebpackPlugin({
                chunks: 'async',
            })
        ],
        module: {
            rules: [
                {
                    test: /\.jsx?$/,
                    exclude: /(node_modules|bower_components)/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-react', '@babel/preset-env']
                        }
                    }
                },
                {
                    test: /\.(less|css)$/,
                    use: ['style-loader', 'css-loader', 'less-loader'],
                },
                {
                    test: /\.js$/,
                    loader: 'eslint-loader',
                    enforce: 'pre',
                    include: [path.resolve(__dirname, 'src')],
                    options: {
                        formatter: require('eslint-friendly-formatter')
                    }
                }
            ]
        },
        resolve: {
            // you can now require('file') instead of require('file.coffee')
            extensions: ['.js', '.json', '.jsx']
        }
    };
    return config;
};
