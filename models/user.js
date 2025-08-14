const bcrypt = require('bcrypt');

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    role: {
      type: DataTypes.ENUM('admin', 'manager', 'user'), 
      allowNull: false,
      defaultValue: 'user',
    }
  });

  User.beforeCreate(async (user) => {
    user.password = await bcrypt.hash(user.password, 10);
  });

  User.associate = (models) => {
    User.hasMany(models.Ticket, { foreignKey: "assignedTo", as: "assignedTickets" });
    User.hasMany(models.Ticket, { foreignKey: "createdBy", as: "createdTickets" });
    User.hasMany(models.Comment, { foreignKey: "userId", as: "comments" });
  };

  return User;
};
