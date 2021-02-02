'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Destinations', [
      {
      destination: 'Lake Tahoe',
      stateId: 2
    },
    {
      destination: 'Yosemite National Park',
      stateId: 2
    },
    {
      destination: 'Aqua Azul Waterfall',
      stateId: 10
    },
    {
      destination: 'Miami Beach',
      stateId: 3
    },
    {
      destination: 'National Park Banff',
      stateId: 5
    },
  ], {});
 
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Destinations', null, {});
     
  }
};
