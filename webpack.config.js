const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const EslintWebpackPlugin = require('eslint-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = function (env, argv) {
  return {
    entry: './src/index',
    output: {
      path: path.join(__dirname, '/build'),
      filename: '[id].[hash].bundle.js',
      publicPath: '/'
    },

    resolve: {
      extensions: ['.ts', '.tsx', '.js', 'jsx'],
    },

    module: {
      rules: [
        {
          test: /\.(ts|js)x?$/,
          exclude: /node_modules/,
          use: [
            'babel-loader',
          ],
        },
        {
          test: /\.s[ac]ss$/i,
          use: [
            argv.mode === 'development' ?
              'style-loader' :
              {
                loader: MiniCssExtractPlugin.loader,
              },
            {
              loader: 'css-loader',
              options: {
                sourceMap: false,
              },
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: false,
              },
            }
          ],
        },
        {
          test: /\.(png|jpe?g|gif)$/i,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[hash].[ext]',
                outputPath: 'images',
              },
            },
          ],
        },
      ],
    },
    plugins: [
      new EslintWebpackPlugin(),
      new ForkTsCheckerWebpackPlugin(),
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        template: './src/public/index.html',
      }),
      new MiniCssExtractPlugin({
        filename: 'css/[id].[hash].css',
      }),
    ],
  }
};