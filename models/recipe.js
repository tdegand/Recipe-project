'use strict';

const Sequelize = require('sequelize');

module.exports = (sequelize) => {
    class Recipe extends Sequelize.Model {}
    Recipe.init({
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull:false 
      },
      description: {
        type: Sequelize.STRING,
        allowNull:false 
      },
      ingredient: {
        type: Sequelize.STRING,
        allowNull:false 
      },
       createdAt: Sequelize.DATE, 
       updatedAt: Sequelize.DATE,
    }, { sequelize });
  
    return Recipe;
  };