/* eslint valid-jsdoc: "off" */
const path = require('path')
const serverCode = require('../config/serverCode')
/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {
    serverCode,
  }

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1602569528678_6877'

  // add your middleware config here
  config.middleware = [
    'test'
  ]

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  }

  config.middleware = ['errorHandler']

  config.jwt = {
    secret: '880917'
  }

  // error & log
  .config.errorHandler = {
    // 通用配置（以下是重点）
    // enable:true, // 控制中间件是否开启。
    // match: '/user/list', // 设置只有符合某些规则的请求才会经过这个中间件（匹配路由）
    // ignore:'/shop' // 设置符合某些规则的请求不经过这个中间件。
    /**
        注意：
        1. match 和 ignore 不允许同时配置
        **/
    // match 和 ignore 支持多种类型的配置方式：字符串、正则、函数（推荐）
    // match(ctx) {
    //     // 只有 ios 设备才开启
    //     const reg = /iphone|ipad|ipod/i;
    //     return reg.test(ctx.get('user-agent'));
    // },
  }

  config.customLogger = {
    businessErrorLogger: {
      file: path.join(appInfo.root, 'logs/business-error.log'),
      formatter(meta) {
        return `[${meta.date}] ${meta.message}`
      },
      // ctx logger
      contextFormatter(meta) {
        return `[${meta.date}] [${meta.ctx.method} ${meta.ctx.url}] ${meta.message}`
      },
    },
  }

  return {
    ...config,
    ...userConfig
  }
}