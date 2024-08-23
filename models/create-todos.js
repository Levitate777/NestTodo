'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class create - todos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  create - todos.init({
    text: DataTypes.STRING,
    isChecked: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'create-todos',
  });
  return create - todos;
};