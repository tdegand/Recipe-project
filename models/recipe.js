'use strict';

module.exports = (sequelize, DataTypes) => {
  const Recipe = sequelize.define('recipe', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement:true,
      unique: true,
      allowNull:false 
    },
    name: {
      type: DataTypes.STRING,
      allowNull:false 
    },
    description: {
      type: DataTypes.STRING,
      allowNull:false 
    },
    ingredient: {
      type: DataTypes.STRING,
      allowNull:false 
    }
  });

  return Recipe;
};