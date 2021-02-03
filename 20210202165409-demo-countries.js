'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

     await queryInterface.bulkInsert('Countries', [
       {
        countryName: 'United States of America',
     
     },
     {
        countryName: 'Mexico'
     },
     {
        countryName: 'Canada'
     }
    
    ], {});
   
  },

  down: async (queryInterface, Sequelize) => {

     await queryInterface.bulkDelete('Countries', null, {});
     
  }
};
