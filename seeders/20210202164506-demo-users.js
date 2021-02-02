'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Users', [
      {
       name: 'Hema W',
       username: 'hema',
       password: '1234'
     },
     {
      name: 'Jeff Elmore',
      username: 'jeff',
      password: '5678'
     }
    ], {});
    
  },

  down: async (queryInterface, Sequelize) => {

     await queryInterface.bulkDelete('Users', null, {});
  
  }
};
