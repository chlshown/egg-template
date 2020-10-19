const serverCode = require('../config/serverCode')

class BusinessError extends Error {
    constructor(message = '', code = serverCode.NORMAL_ERR) {
        super(message)
        this.name = 'BusinessError'
        this.status = code
    }
}

class HttpError extends Error {
    constructor(message = '', code = serverCode.NORMAL_ERR) {
        super(message)
        this.name = 'HttpError'
        this.status = code
    }
}

module.exports = { BusinessError, HttpError }