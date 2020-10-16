const BaseController = require('./base')

class HomeController extends BaseController {
  async index() {
    // this.success('hello1')
    this.error(500, '111')
    // this.success('hello')
  }

  async hello() {
    const ctx = this.ctx
    const name = ctx.query.name
    const _name = await ctx.service.hello.getName(name)
    ctx.body = _name
  }

  async error1() {
    this.ctx.throw('hahaa', 501)
  }

  async login() {
    const ctx = this.ctx
    const token = ctx.app.jwt.sign({
      ...ctx.request.body,
    }, this.app.config.jwt.secret, {
      expiresIn: '60m', // 时间根据自己定，具体可参考jsonwebtoken插件官方说明
    })
    this.success({
      token,
    })
  }
}

module.exports = HomeController
