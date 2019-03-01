const express = require('express')

const RolesController = require('../controllers/role')

const router = express.Router()

router
  .get('/', RolesController.list)
  .put('/:id', RolesController.update)
  .get('/:id', RolesController.getById)
  .delete('/:id', RolesController.delete)
  .post('/addUser', RolesController.addUser)

module.exports = router
