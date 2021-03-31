const DotEnv = require("dotenv-webpack");
const {resolve} = require('path')

module.exports = {
  mode: 'production',
  devtool: 'source-map',
  plugins: [
    new DotEnv({
      path: resolve(__dirname, '..', '.env.production')
    }),
  ]
}
