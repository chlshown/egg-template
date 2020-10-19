const chalk = require('chalk')

module.exports = {
    debug(msg) {
        const ctx = this.ctx
        const path = ctx.path
        console.log(chalk.blue(`Path:${path}`))
        msg = typeof msg === 'object' ? JSON.stringify(msg) : msg
        console.log(chalk.magenta(msg))
    },
  }