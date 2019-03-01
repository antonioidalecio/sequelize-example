const { sequelize, Sequelize } = require('../database')
const Role = require('./role')
const User = require('./user')
const Profile = require('./profile')
const UserRole = require('./userRole')

const models = {
  Role,
  User,
  Profile,
  UserRole
}

for (let modelName in models) {
  const model = models[modelName]
  const newModel = model(sequelize, Sequelize)
  models[modelName] = newModel
}

for (let modelName in models) {
  const model = models[modelName]
  if (model.associate) {
    model.associate(models)
  }
}

module.exports = models
