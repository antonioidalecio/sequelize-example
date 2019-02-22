module.exports = (sequelize, DataTypes) => {
	const CreditCard = sequelize.define('CreditCard', {
		cardName: DataTypes.STRING,
		cardNumber: DataTypes.STRING,
		expiredDate: DataTypes.DATE
	})
	CreditCard.associate = function(models) {
		// associations can be defined here
		CreditCard.belongsTo(models.Person, {
			foreignKey: 'cardId'
		})
	}
	return CreditCard
}
