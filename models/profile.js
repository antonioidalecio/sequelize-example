module.exports = (sequelize, DataTypes) => {
	const Profile = sequelize.define('Profile', {
		userId: DataTypes.INTEGER,
		fullname: DataTypes.STRING,
		birthdate: DataTypes.DATE,
		gender: DataTypes.STRING,
		position: DataTypes.STRING
	})

	Profile.associate = function(models) {
		Profile.User = Profile.belongsTo(models.User, {
			foreignKey: 'userId',
			as: 'user'
		})
	}

	return Profile
}
