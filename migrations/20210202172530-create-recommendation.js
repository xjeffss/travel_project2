'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Recommendations', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull:false
      },
      destination: {
        type: Sequelize.STRING,
        allowNull:false
      },      
      stateId: {
        type: Sequelize.INTEGER,
        allowNull:false
      },
      rating: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      summary: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        defaultValue: new Date(),
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        defaultValue: new Date(),
        type: Sequelize.DATE
      }
    },
    );
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Recommendations');
  }
};