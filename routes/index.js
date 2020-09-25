var express = require('express');
var router = express.Router();
const { Recipe } = require('../models');

router.use(express.json());

//async handler for this application
function asyncHandler(cb){
  return async(req, res, next) => {
    try {
      await cb(req, res, next)
    } catch(error){
      res.status(500).send(error);
    }
  }
}

/* GET home page. */
router.get('/', function(req, res, next) {
  res.status(200).send( { message: "Welcome to the API project"});
});

/**
 * Get all recipes (GET)
 */
router.get('/api/recipes', asyncHandler(async(req, res) => {
  try {
    //query's the DB for all instances and returns them
    const recipes = await Recipe.findAll()
      res.status(200)
      res.json({ recipes })
  } catch(error) {
      res.status(404)
      res.json({ error })
  }
}));
 /**
 * Get a single recipe (GET)
 */
router.get('/api/recipes/:id', asyncHandler(async(req, res) => {
  try {
    //query's the DB for all instances and returns them
    const recipe = await Recipe.findOne({
      where: {
        id: req.params.id
      }
    });
    if(recipe) {
      res.status(200)
      res.json({ recipe })
    } else {
      res.status(404).json({
        message: "Recipe does not exist"
      })
    }
  } catch(error) {
      res.status(404)
      res.json({ error })
  }
}));
  /**
 * update a recipe (PUT)
 */
router.put('/api/recipes/:id', asyncHandler(async(req, res, next) => {
  try {
    const curRecipe = await Recipe.findByPk(req.params.id)
    if(curRecipe){
      curRecipe.update(req.body)
      res.status(204).end();
    } else {
      res.status(404).json({
        message: "Course could not be found"
      })
    }
  } catch(error) {
    res.status(404)
    res.json({ error })
  }
}));
  /**
 * Create a new recipe (POST)
 */
router.post('/api/recipes', asyncHandler(async(req, res, next) => {
  try {
    res.status(201)
    const recipe = await Recipe.create(req.body)
    res.location("/api/courses/" + recipe.id).end();
  }catch(error) {
    res.status(400)
    res.json({ error })
  } 
}));
 /**
 * Delete a recipe (DELETE)
 */
router.delete('/api/recipes/:id', asyncHandler(async(req, res, next) =>{
  try{

    const curRecipe = await Recipe.findByPk(req.params.id)

      await curRecipe.destroy({
        where: {
            id: req.params.id
        }
      })
      res.status(204)
      res.json({
        message: "Course deleted!"
      })
  } catch(error) {
      res.status(400)
      res.json({ error })
  }
}));

module.exports = router;
