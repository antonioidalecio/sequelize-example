const express = require('express')

const roles = require('./roles')
const users = require('./users')
const profiles = require('./profiles')

const router = express.Router()

router
	.use('/roles', roles)
	.use('/users', users)
	.use('/profiles', profiles)

module.exports = router
