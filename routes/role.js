const express = require('express')

const RolesController = require('../controllers/role')

const router = express.Router()

router
  .get('/', RolesController.list)

module.exports = router