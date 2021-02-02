'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Destination extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Destination.belongsTo(models.StateProvince, {foreignKey: 'stateId'});
      Destination.belongsToMany(models.User, {
        through: 'Recommedation',
        foreignKey: 'destinationId',
        otherKey: 'userId'
      });
    }
  };
  Destination.init({
    destination: DataTypes.STRING,
    stateId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Destination',
  });
  return Destination;
};