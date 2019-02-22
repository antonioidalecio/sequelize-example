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
	}

	return User
}
