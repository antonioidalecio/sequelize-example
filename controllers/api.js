const express = require('express')

const usersController = require('./user')
const profilesController = require('./profile')
const rolesController = require('./role')

const router = express.Router()

router
  .use('/users', usersController)
  .use('/roles', rolesController)
  .use('/profiles', profilesController)

module.exports = router