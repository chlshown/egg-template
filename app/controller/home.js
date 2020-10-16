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
}

module.exports = HomeController
