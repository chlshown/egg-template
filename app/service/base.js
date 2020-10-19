const Service = require('egg').Service

class BaseService extends Service {
    success(data) {
        return {
            success: true,
            code: this.config.serverCode.SUCCESS_CODE,
            msg: '',
            data: data || {}
        }
    }

    error(msg, code = this.config.serverCode.NORMAL_ERR) {
        return {
            success: false,
            code,
            msg,
            data: null
        }
    }
}

module.exports = BaseService