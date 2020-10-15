const BaseController = require('./base')

class HomeController extends BaseController {
  async index() {
    console.log('00000000000000000000000000000000000000')
    this.success('hello1')
    // this.error(500, '111')
    // this.success('hello')
  }

  async hello() {
    const ctx = this.ctx
    const name = ctx.query.name
    const _name = await ctx.service.hello.getName(name)
    ctx.body = _name
  }

  async error() {
    this.ctx.throw(501, 'hahaa')
  }
}

module.exports = HomeController