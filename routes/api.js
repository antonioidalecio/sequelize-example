const express = require('express')

const roles = require('./role')

const router = express.Router()

router
  .use('/roles', roles)

module.exports = router