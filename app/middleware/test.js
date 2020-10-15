module.exports = (options, app) => {
  return async function handleResponse(ctx, next) {
    if (ctx.query && ctx.query.name === 111) {
      ctx.status = 403
      ctx.message = 'Go away, robot.'
    } else {
      console.log(ctx.path)
      await next()
    }
  }
}