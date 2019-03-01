const express = require('express')

const UserController = require('../controllers/user')

const router = express.Router()

router
	.get('/', UserController.list)
	.post('/', UserController.create)
	.post('/:id', UserController.addProfile)
	.get('/:id', UserController.getById)
  .put('/:id', UserController.update)
  .delete('/:id', UserController.delete)

module.exports = router
