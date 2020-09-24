'use strict';

module.exports = (sequelize, DataTypes) => {
  const Recipe = sequelize.define('recipe', {
    name: {
      type: DataTypes.STRING
    },
    description: {
      type: DataTypes.STRING
    },
    ingredient: {
      type: DataTypes.STRING
    }
  });

  return Recipe;
};