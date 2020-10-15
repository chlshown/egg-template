const Service = require('egg').Service

class HelloService extends Service {
  async getName (name = 'ray') {
    return name
  }
}

module.exports = HelloService
