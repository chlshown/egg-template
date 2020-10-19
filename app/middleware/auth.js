module.exports = options => {
    return async function auth(ctx, next) {
      const token = ctx.request.header.authorization
      if (ctx.path.includes('auth')) {
        await next()
      } else {
        let decode
      if (token) {
        try {
          // 解码token
          decode = ctx.app.jwt.verify(token, options.secret)
          await next()
          console.log(decode)
        } catch (error) {
          ctx.throw(error.message, 401)
        }
      } else {
        ctx.throw('No Token', 401)
      }
      }
    }
}