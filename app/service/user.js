const Service = require('./base')

class UserService extends Service {
  async addUser(obj) {
    const { password } = obj
    if (this.checkPassword(password)) {
        // TODO Dao
        return this.success()
    } else {
        return this.error('密码不正确')
    }
  }

  checkPassword() {
      return false
  }

  async getUser (user) {
    if (user === 'ray') {
        return {
            user: 'ray',
            password: 'ray'
        }
    } else {
        this.error('Service Error')
    }
  }
}

module.exports = UserService
