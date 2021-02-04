'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
await queryInterface.bulkInsert('StateProvinces', [
  {
     stateName: 'California',
     country: 'United States of America'
     },
     {
      stateName: 'Florida',
      country: 'United States of America'
      },
      {
        stateName: 'Hawaii',
        country: 'United States of America'
        },
      {
        stateName: 'Alberta',
        country: 'Canada'
        },
        {
          stateName: 'Quebec',
<<<<<<< HEAD
          country: 'Canada' 
        },
        {
          stateName: 'Ontario',
          country: 'Canada'  
=======
          country: 'Canada'
        },
        {
          stateName: 'Ontario',
          country: 'Canada'
>>>>>>> master
        },
        {
          stateName: 'Baja California',
          country: 'Mexico'
        },
        {
          stateName: 'Yucatan',
          country: 'Mexico'
        },
        {
          stateName: 'Chiapas',
          country: 'Mexico'
        },
    ], {});
    
  },

  down: async (queryInterface, Sequelize) => {

     await queryInterface.bulkDelete('StateProvinces', null, {});
    
  }
};
