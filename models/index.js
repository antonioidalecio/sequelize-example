const fs = require('fs')
const path = require('path')
const Sequelize = require('sequelize')
const env = process.env.NODE_ENV || 'development'
const config = require('../config/config')[env]

const db = {}

const basename = path.basename(__filename)

const sequelize = new Sequelize(
	config.database,
	config.username,
	config.password,
	config
)

fs.readdirSync(__dirname)
	.filter((file) => {
		const isHiddenFile = file.startsWith('.')
		const isSameFile = file === basename
		const isJsFile = file.endsWith('.js')
		return !isHiddenFile && !isSameFile && isJsFile
	})
	.forEach((file) => {
		const model = sequelize.import(path.join(__dirname, file))
		db[model.name] = model
	})

Object.keys(db).forEach((modelName) => {
	if (db[modelName].associate) {
		db[modelName].associate(db)
	}
})

db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db
