module.exports = (sequelize, DataTypes) => {
  const Person = sequelize.define('Person', {
    fullname: DataTypes.STRING,
    birthdate: DataTypes.DATE,
    cardId: DataTypes.INTEGER
  })
  Person.associate = function(models) {}
  return Person
}
