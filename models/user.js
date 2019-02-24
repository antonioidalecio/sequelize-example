module.exports = (sequelize, DataTypes) => {
	const User = sequelize.define('User', {
		username: DataTypes.STRING,
		password: DataTypes.STRING
	})

	User.associate = function(models) {
		// associations can be defined here
		User.hasOne(models.Profile, {
			foreignKey: 'userId',
			as: 'profile'
		})
		User.belongsToMany(models.Role, {
			foreignKey: 'userId',
			as: 'roles',
			through: 'UserRole'
		})
	}

	return User
}
