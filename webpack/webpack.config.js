const commonConfig = require('./webpack.common')
const {merge} = require('webpack-merge')

module.exports = () => {
  const mode = process.env.NODE_ENV !== 'production' ? 'dev' : 'prod'
  const envConfig = require(`./webpack.${mode}`)
  const config = merge(commonConfig, envConfig)
  return config
}
