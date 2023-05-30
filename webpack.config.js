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
      // {
      //   test: /\.(js|jsx)$/i,
      //   loader: 'babel-loader',
      // },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // 'style-loader',
          {
            loader: MiniCssExtractPlugin.loader,
            options: { publicPath: '../assets/' },
          },
          'css-loader',
          { loader: 'sass-loader', options: { sourceMap: true } },

          // {
          //   loader: 'sass-resources-loader',          //   дщфву эыфыы-куыщгксуы-дщфвукэб

          //   options: {
          //     resources: ['src/scss/style.scss'],
          //   },
          // },
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: 'asset/resource',
        generator: { outputPath: 'assets' },
      },
      // {
      // test: /\.(png|jpe?g|gif|svg)$/i,
      // use: [
      //   {
      //     loader: 'file-loader',
      //     options: {
      //       // name: '[path][name].[ext]',
      //       outputPath: 'assets',
      //     },
      //   },
      // {
      //   loader: 'url-loader',
      //   options: {
      //     limit: 8192,
      //   },
      // },
      //     ],
      //   },
    ],
  },
  // resolve: {
  //   extensions: ['.js', '.scss', '.css', '.jsx'],
  // },
  plugins: [
    new MiniCssExtractPlugin(),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      entry: 'index.js',
      template: path.resolve(__dirname, 'index.html'),
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
