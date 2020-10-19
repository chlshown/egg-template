const {
  Controller
} = require('egg')
class BaseController extends Controller {
  success(data) {
    this.ctx.body = {
      success: true,
      code: this.config.serverCode.SUCCESS_CODE,
      msg: '',
      data: data || {}
    }
  }

  error(msg, code) {
    this.ctx.throw(new this.config.BusinessError(msg, code))
  }

  async callService(name, method, data) {
    const res = await this.ctx.service[name][method](data)
    return this.handleServiceResponse(res)
  }

  handleServiceResponse(res) {
    console.log(this.ctx.helper.debug(res))
    if (res.success) {
      return res.data
    } else {
      this.error(res.msg, res.code)
      return null
    }
  }
}
module.exports = BaseController