'use strict'

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const {
    router,
    controller
  } = app
  router.get('/', controller.home.index)
  router.get('/hello', controller.home.hello)
  router.get('/error', controller.home.error)
}