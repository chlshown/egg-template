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
  router.get('/user', controller.home.getUserByName)
  router.get('/error', controller.home.error1)
  router.get('/auth/login', controller.home.login)
}