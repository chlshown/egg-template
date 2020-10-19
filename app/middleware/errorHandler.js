module.exports = (option, app) => {
  return async function errorHandler(ctx, next) {
    try {
      await next()
    } catch (err) {
      // 所有的异常都在 app 上触发一个 error 事件，框架会记录一条错误日志
      ctx.app.emit('error', err, ctx)
      ctx.helper.debug(err.message)

      switch (err.name) {
        case 'BusinessError':
          ctx.status = 200
          ctx.body = {
            success: false,
            code: err.status,
            msg: err.message,
            data: null
          }
          break
        case 'HttpError':
          ctx.status = err.status || 500
          ctx.body = {
            success: false,
            code: err.status || 500,
            msg: err.message,
            data: null
          }
          break
        default :
        ctx.status = err.status || 500
        ctx.body = {
          success: false,
          code: err.status || 500,
          msg: err.message,
          data: null
        }
        if (err.status === 422) {
          ctx.body.detail = err.errors
        }
        ctx.status = err.status || 500
            break
      }
    }
  }
}