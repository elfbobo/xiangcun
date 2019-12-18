const path = require('path')
const resolve = function (dir) {
  return path.resolve(__dirname, dir)
}

module.exports = {
  devServer: {
    port: 8080
  },

  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))
  }
}
