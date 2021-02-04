'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
     await queryInterface.bulkInsert('Recommendations', [
       {
        userId: 1,
        destination: 'Lake Tahoe',
        stateId: 2,
        rating: 4,
        summary: 'xxxxxx'
     }
    ], {});
    
  },

  down: async (queryInterface, Sequelize) => {
    
     await queryInterface.bulkDelete('Recommendations', null, {});
     
  }
};
