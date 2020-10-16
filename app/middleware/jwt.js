module.exports = options => {
    return async function jwt(ctx, next) {
      const token = ctx.request.header.authorization
      let decode
      if (token) {
        try {
          // 解码token
          decode = ctx.app.jwt.verify(token, options.secret)
          await next()
          ctx.logger.debug(decode)
        } catch (error) {
          ctx.throw(error.message, 401)
        }
      } else {
        ctx.throw('No Token', 401)
      }
    }
}