const bcrypt = require('bcrypt')

const hashPassword = (password) => {
	return bcrypt.hash(password, 10)
}

module.exports = (sequelize, DataTypes) => {
	const User = sequelize.define(
		'User',
		{
			username: {
				type: DataTypes.STRING,
				unique: true
			},
			password: DataTypes.STRING
		},
		{
			defaultScope: {
				attributes: {
					exclude: ['password'] // Exclude password from query results, unless you specify it explicitly on the query http://docs.sequelizejs.com/manual/tutorial/scopes.html
				}
			}
		}
	)

	// Instance level method
	User.prototype.toJSON = function() {
    const valuesCopy = { ...this.dataValues }
		delete valuesCopy.password
		return valuesCopy
	}

	User.beforeSave((user, options) => {
    if(!user.password) {
      return Promise.resolve()
    }
		return hashPassword(user.password).then((hashedPassword) => {
			user.password = hashedPassword
		})
	})

	User.associate = function(models) {
		User.Profile = User.hasOne(models.Profile, {
			foreignKey: 'userId',
			as: 'profile'
		})
		User.Roles = User.belongsToMany(models.Role, {
			foreignKey: 'userId',
			as: 'roles',
			through: models.UserRole
		})
	}

	return User
}
