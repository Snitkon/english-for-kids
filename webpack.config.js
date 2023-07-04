const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const { merge } = require('webpack-merge')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const baseConfig = {
  entry: path.resolve(__dirname, './src/index.js'),
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: { publicPath: '../assets/' },
          },
          'css-loader',
          { loader: 'sass-loader', options: { sourceMap: true } },
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: 'asset/resource',
        generator: { outputPath: 'assets' },
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      entry: 'index.js',
      template: path.resolve(__dirname, './src/index.html'),
    }),
    new CopyPlugin({
      patterns: [
        {
          from: 'src/assets/',
          to: 'assets',
          globOptions: {
            ignore: ["**.(png|jpe?g|gif|svg)"],
          },
        },
      ],
    }),
  ],
  target: 'web',
}

module.exports = ({ mode }) => {
  const isProductionMode = mode === 'prod'
  const envConfig = isProductionMode
    ? require('./webpack.prod.config')
    : require('./webpack.dev.config')

  return merge(baseConfig, envConfig)
}
