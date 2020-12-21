const mongoose = require('mongoose');

const instructionsList = new mongoose.Schema ({ name: String}) 

const ingredientList = new mongoose.Schema ({ any: [{}]})

const recipeSchema = new mongoose.Schema({
    name:  { type: String, required: true },
    cookTime:  { type: Number  },
    description:  { type: String },
    servingSize:  { type: Number },
    ingredients:  [ingredientList],
    instructions:  [instructionsList],
    recipeCompleted: Boolean
});

const  Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;

