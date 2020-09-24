'use strict';

const Sequelize = require('sequelize');
const RecipeModel = require('./models/recipe.js');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  store: ':memory'
});

const Recipe = RecipeModel(sequelize, Sequelize);


module.exports = {
  sequelize,
  Sequelize,
  Recipe
}
