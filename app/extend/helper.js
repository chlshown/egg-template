module.exports = {
  handleResponse({
    code,
    data,
    msg,
    message
  } = {}) {
    return {
      code: code || this.config.serverCode.SUCCESS_CODE,
      msg: msg || message || '',
      data: data || {}
    }
  },
  handleSuccess(data = {}) {
    return {
      code: this.config.serverCode.SUCCESS_CODE,
      msg: '',
      data: data || {}
    }
  }
}