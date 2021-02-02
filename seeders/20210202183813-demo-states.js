'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
await queryInterface.bulkInsert('StateProvinces', [
  {
     stateName: 'California',
     countryId: 1
     },
     {
      stateName: 'Florida',
      countryId: 1
      },
      {
        stateName: 'Hawaii',
        countryId: 1
        },
      {
        stateName: 'Alberta',
        countryId: 3  
        },
        {
          stateName: 'Quebec',
          countryId: 3  
        },
        {
          stateName: 'Ontario',
          countryId: 3  
        },
        {
          stateName: 'Baja California',
          countryId: 2
        },
        {
          stateName: 'Yucatan',
          countryId: 2
        },
        {
          stateName: 'Chiapas',
          countryId: 2
        },
    ], {});
    
  },

  down: async (queryInterface, Sequelize) => {

     await queryInterface.bulkDelete('StateProvinces', null, {});
    
  }
};
