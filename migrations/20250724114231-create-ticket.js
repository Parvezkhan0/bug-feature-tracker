'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Tickets', {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey:true,
        allowNull:false
      },
      title: {
        type: Sequelize.STRING,
        allowNull:false
      },
      description: {
        type: Sequelize.TEXT,
        allowNull:false
      },
      type: {
        type: Sequelize.ENUM('frontend','backend','testing','designing','default'),
        allowNull: false,
        defaultValue: 'default'
      },
      status: {
        type: Sequelize.ENUM('assign','due','complete','running','pending'),
        allowNull: false,
        defaultValue: 'assign'
      },
      priority: {
        type: Sequelize.ENUM('high','medium','low','urgent'),
        allowNull: false,
        defaultValue: 'urgent'
      },
      projectId: {
        type: Sequelize.UUID,
        allowNull: false
      },
      assignedTo: {
        type: Sequelize.UUID,
        allowNull: false
      },
      createdBy: {
        type: Sequelize.UUID,
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Tickets');
  }
};