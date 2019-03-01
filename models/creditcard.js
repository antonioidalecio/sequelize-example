module.exports = (sequelize, DataTypes) => {
  const CreditCard = sequelize.define('CreditCard', {
    cardName: DataTypes.STRING,
    cardNumber: DataTypes.STRING,
    expiredDate: DataTypes.DATE
  })
  CreditCard.associate = function(models) {
    CreditCard.belongsTo(models.Person, {
      foreignKey: 'cardId'
    })
  }
  return CreditCard
}
