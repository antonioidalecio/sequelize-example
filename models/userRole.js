module.exports = (sequelize, DataTypes) => {
  const UserRole = sequelize.define('UserRole', {
    userId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false
    },
    roleId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false
    }
  })

  return UserRole
}
