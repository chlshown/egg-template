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

  error(code, message = '', options) {
    const {
      status = 200
    } = options || {}
    this.ctx.status = status
    this.ctx.getLogger('businessErrorLogger').error(new Error(`status:${status} code:${code} message:${message}`))
    this.ctx.body = {
      success: false,
      code: code || this.config.serverCode.NORMAL_ERR,
      msg: message,
      data: null
    }
  }
}
module.exports = BaseController