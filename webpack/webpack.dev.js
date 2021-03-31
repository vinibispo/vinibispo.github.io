const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')
const DotEnv = require('dotenv-webpack')
const {resolve} = require('path')

module.exports = {
  mode: 'development',
  devtool: 'cheap-module-source-map',
  devServer: {
    hot: true,
    port: 8080,
    historyApiFallback: true,
  },
  plugins: [
    new ReactRefreshWebpackPlugin(),
    new DotEnv({
      path: resolve(__dirname, '..', '.env.development')
    }),
  ]
}
