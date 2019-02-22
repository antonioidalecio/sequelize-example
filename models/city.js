module.exports = (sequelize, DataTypes) => {
	const City = sequelize.define('City', {
		provinceCode: DataTypes.STRING,
		cityName: DataTypes.STRING
	})

	City.associate = function(models) {
		// associations can be defined here
		City.belongsTo(models.Province, {
			foreignKey: 'provinceCode',
			targetKey: 'provinceCode'
		})
	}

	return City
}
