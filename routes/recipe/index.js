const express       = require('express');
const router        = express.Router();
const recipeCtrl    = require('./ctrl');

// GET ALL RECIPES
router.get('/', recipeCtrl.getRecipe);

module.exports = router;