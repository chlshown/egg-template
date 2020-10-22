const BaseController = require('./base')

class HomeController extends BaseController {
  async index() {
    // this.success('hello1')
    // this.error('EEEEEE')
    // this.success('hello')
    const data = await this.callService('user', 'addUser', {
      name: 'test',
      password: '123456'
    })
    this.success(data)
  }

  async getUserByName() {
    // this.success('hello1')
    // this.error('EEEEEE')
    // this.success('hello')
    const data = await this.callService('user', 'getUserByName', 'test')

    this.success(data)
  }

  async error1() {
    this.ctx.throw('hahaa', 501)
  }

  async login() {
    const {
      ctx
    } = this
    const {
      user,
      password
    } = ctx
    if (this.config.token) {
      const userInfo = ctx.service.user.checkPassword(user, password)
      if (userInfo) {
        const token = ctx.app.jwt.sign({
          ...ctx.request.body,
        }, this.app.config.jwt.secret, {
          expiresIn: '60m', // 时间根据自己定，具体可参考jsonwebtoken插件官方说明
        })
        this.success({
          token,
        })
      } else {
        this.error(500, '用户名或密码错误')
      }
    } else {
      this.success({
        token: 'no-token',
      })
    }
  }
}

module.exports = HomeController