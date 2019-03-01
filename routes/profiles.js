const express = require('express')

const ProfileController = require('../controllers/profile')

const router = express.Router()

router
	.get('/', ProfileController.list)
	.post('/', ProfileController.create)
	.get('/:id', ProfileController.getById)

module.exports = router
