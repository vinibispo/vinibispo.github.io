const HtmlWebpackPlugin = require('html-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const TsConfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const { resolve } = require('path');

module.exports = {
  entry: resolve(__dirname, '..', 'src', 'index.tsx'),
  target: 'web',
  resolve: {
    extensions: ['.js', '.json', '.jsx', '.tsx', '.ts'],
    plugins: [
      new TsConfigPathsPlugin({
        configFile: resolve(__dirname, '..', 'tsconfig.json'),
        logLevel: 'info',
        extensions: ['.ts', '.tsx'],
        //mainFields: ["browser", "main"],
      }),
    ],
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          },
        ],
      },
      {
        test: /(\.css$)/,
        use: [
          process.env.NODE_ENV !== 'production'
            ? 'style-loader'
            : MiniCSSExtractPlugin.loader,
          'css-loader',
          'postcss-loader'
        ],
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        type: 'asset/inline',
      },
    ],
  },
  output: {
    path: resolve(__dirname, '..', './dist'),
    publicPath: '/',
    filename: 'bundle.js',
  },
  mode: 'development',
  plugins: [
    new MiniCSSExtractPlugin({
      filename: '[name].[contenthash].css',
      chunkFilename: '[id].css',
    }),
    new HtmlWebpackPlugin({
      template: resolve(__dirname, '..', 'public', 'index.html'),
      favicon: resolve(__dirname, '..', 'public', 'favicon.ico'),
    }),
    new CompressionPlugin({
      algorithm: 'gzip',
      test: /\.(js|css|html|jpg|jpeg|svg)$/,
      threshold: 8192,
      minRatio: 0.8,
    }),
    new CleanWebpackPlugin(),
    new CopyPlugin({
      patterns: [{ from: 'src/assets', to: 'assets' }],
    }),
  ],
};
