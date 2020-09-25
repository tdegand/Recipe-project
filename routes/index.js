var express = require('express');
var router = express.Router();
const { Recipe } = require('../models/recipe');

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
    const recipes = await Recipe.findAll()
      res.status(200)
      console.log(recipes)
      res.json({ recipes })
  } catch(error) {
      res.status(404)
      res.json({ error })
  }
}));
 /**
 * Get a single recipe (GET)
 */
router.get('/api/recipes/:id', function(req, res, next) {
  
});
  /**
 * update a recipe (PUT)
 */
router.put('/api/recipes/:id', function(req, res, next) {
  
});
  /**
 * Create a new recipe (POST)
 */
router.post('/api/recipes', function(req, res, next) {
  
});
 /**
 * Delete a recipe (DELETE)
 */
router.delete('/api/recipes/:id', function(req, res, next) {
  
});

module.exports = router;
