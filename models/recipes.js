const mongoose = require('mongoose');


// const recipeSchema = new mongoose.Schema({
//     recipeName:  { type: String },
//     cookTime:  { type: Number  },
//     description:  { type: String },
//     servingSize:  { type: Number },
//     ingredients:  {type: String },
//     instructions:  {type: String },
//     recipeCompleted: Boolean
// });

const countryRecipeSchema = new mongoose.Schema({
    countryName: {type: String, required: true},

        // recipeInfo: [{
        //     recipeName:  { type: String },
        //     cookTime:  { type: Number  },
        //     description:  { type: String },
        //     servingSize:  { type: Number },
        //     ingredients:  {type: String },
        //     instructions:  {type: String },
        //     recipeCompleted: Boolean
        // }

        // ]

    recipeName:  { type: String, required: true },
    cookTime:  { type: Number  },
    image:  { type: String  },
    description:  { type: String },
    servingSize:  { type: Number },
    ingredients:  {type: String },
    instructions:  {type: String },
    recipeCompleted: Boolean
});

const  recipeByCountry = mongoose.model('Recipe', countryRecipeSchema);

module.exports = recipeByCountry;

