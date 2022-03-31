/**
 * 本文件对项目无任何作用，仅作为 WebStorm 识别别名用
 * 进入 WebStorm Settings -> Languages & Frameworks -> JavaScript -> Webpack -> Manually，选择这个文件即可
 * */
const { resolve } = require('path')

module.exports = {
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  }
}
