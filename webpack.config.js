const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
  mode: 'production',
  // mode: 'development',

  performance: {
    hints: false
  },

  entry: {
    index: './src/js/index.js',
  },

  output: {
    filename: 'js/[name].js',
    path: path.resolve(__dirname, 'build'),
    assetModuleFilename: 'images/[hash].[ext][query]',
    clean: true,
  },

  plugins: [
    new VueLoaderPlugin(),

    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),

    new webpack.DefinePlugin({
      __VUE_OPTIONS_API__: true,
      __VUE_PROD_DEVTOOLS__: false,
      __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: false,
    }),

    new CopyWebpackPlugin({
      patterns: [
        { from: path.resolve(__dirname, 'src/media'), to: 'media' },
        { from: path.resolve(__dirname, 'src/images'), to: 'images' },
      ],
    }),
  ],

  module: {
    rules: [
      {
        test: /\.vue$/,
        use: 'vue-loader',
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },

  devServer: {
    static: './build',
  },

  resolve: {
    alias: {
      vue: 'vue/dist/vue.runtime.esm-bundler.js',
      '@': path.resolve(__dirname, 'src/js'),
    },
  },
};
