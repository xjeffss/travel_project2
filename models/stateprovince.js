'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class StateProvince extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      StateProvince.belongsTo(models.Country, {foreignKey: 'countryId'});
      StateProvince.hasMany(models.Destination, {foreignKey: 'stateId'});
    }
  };
  StateProvince.init({
    stateName: DataTypes.STRING,
    countryId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'StateProvince',
  });
  return StateProvince;
};