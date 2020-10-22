const Service = require('./base')

class UserService extends Service {
  async addUser(obj) {
    const {
      name,
      password
    } = obj
    if (this.checkPassword(password)) {
      // 更新用户信息
      const {
        ctx,
      } = this
      const result = await ctx.model.User.create({
        name,
      })
      return this.success(result)
    } else {
      return this.error('密码不正确')
    }
  }

  checkPassword() {
    return true
  }

  async getUserByName(name) {
    const {
      ctx,
    } = this
    try {
      const results = await ctx.model.User.find({
        name,
      })
      if (!results || !Array.isArray(results) || results.length === 0) {
        return this.error('未找到对应的用户')
      }
      return this.success(results)
    } catch (err) {
      ctx.throw(err.message)
    }
  }
}

module.exports = UserService