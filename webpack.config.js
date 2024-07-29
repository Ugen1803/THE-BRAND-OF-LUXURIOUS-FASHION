const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: {
    index: './src/js/index.js',
  },

  output: {
    filename: 'js/index.js',
    path: path.resolve(__dirname, 'build'),
    assetModuleFilename: 'images/[hash][ext][query]',
    clean: true,
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),

    new CopyWebpackPlugin({
      patterns: [
        { from: 'src/catalog.html', to: '' },
        { from: 'src/for-woman.html', to: '' },
        { from: 'src/registracion.html', to: '' },
        { from: 'src/cart.html', to: '' },
        { from: 'src/media', to: 'media' },
        { from: 'src/images', to: 'images' },
      ],
    }),
  ],

  mode: 'development',
  devServer: {
    static: './build',
  },

  module: {
    rules: [
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
};
