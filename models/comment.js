'use strict';
const {
  Model,
  UUIDV4
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Comment.belongsTo(models.Ticket, { foreignKey: "ticketId", as: "ticket" });
      Comment.belongsTo(models.User, { foreignKey: "userId", as: "user" });
    }
  }
  Comment.init({
    id:{
      type:DataTypes.UUID,
      primaryKey:true,
      defaultValue:UUIDV4,
      allowNull:false
    },
    text:{
      type: DataTypes.TEXT,
      allowNull:false
    },
    ticketId:{
      type: DataTypes.UUID,
      allowNull:false
    },
    userId:{
      type: DataTypes.UUID,
      allowNull:false
    }
  }, {
    sequelize,
    modelName: 'Comment',
  });
  return Comment;
};