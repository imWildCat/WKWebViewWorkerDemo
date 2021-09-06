const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
var InlineChunkHtmlPlugin = require('inline-chunk-html-plugin');
const HtmlWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin');


const config = {
  entry: './src/index.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.worker.ts?$/,
        use: ['ts-loader', 'raw-loader'],
        // exclude: /node_modules/
      },
      {
        test: /\.ts(x)?$/,
        loader: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [
      '.tsx',
      '.ts',
      '.js',
      '.worker.ts',
    ]
  },
  plugins: [new HtmlWebpackPlugin({
    inlineSource: '.(js)$',
    // minify: true,
    inject: true,
    cache: false,
    template: path.resolve(__dirname, 'public/index.html'),
    chunks: [
      'main',
    ],
  }),
  new HtmlWebpackInlineSourcePlugin(HtmlWebpackPlugin),
  ],
};

module.exports = config;
