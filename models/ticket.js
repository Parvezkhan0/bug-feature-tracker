'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Ticket extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
    Ticket.belongsTo(models.Project, { foreignKey: "projectId", as: "project" });
    Ticket.belongsTo(models.User, { foreignKey: "assignedTo", as: "assignedUser" });
    Ticket.belongsTo(models.User, { foreignKey: "createdBy", as: "creator" });
    Ticket.hasMany(models.Comment, { foreignKey: "ticketId", as: "comments" });
    }
  }
  Ticket.init({
    id:{
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    title:{
      type: DataTypes.STRING,
      allowNull:false
    },
    description:{
      type:DataTypes.TEXT,
      allowNull:false
    },
    type:{
      type:DataTypes.ENUM('frontend','backend','testing','designing','default'),
      defaultValue:'default',
      allowNull:false
    },
    status:{
      type:DataTypes.ENUM('assign','due','complete','running','pending'),
      defaultValue:'assign',
      allowNull:false
    },
    priority:{
      type:DataTypes.ENUM('high','medium','low','urgent'),
      defaultValue:'urgent',
      allowNull:false
    },
    projectId:{
      type:DataTypes.UUID,
      allowNull:false
    },
    assignedTo:{
      type: DataTypes.UUID,
      allowNull:false
    },
    createdBy:{
      type:DataTypes.UUID,
      allowNull:false
    }
  }, {
    sequelize,
    modelName: 'Ticket',
  });
  return Ticket;
};