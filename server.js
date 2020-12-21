const express = require('express')
const app = express()
const mongoose = require('mongoose')
const methodOverride = require('method-override')

const PORT = process.env.PORT || 3000;

//declaring the mongoURI variable
const mongoURI = "mongodb+srv://iadjivon:7L5BjoiBTM9gfCDI@cluster0.pulvm.mongodb.net/AfricaRecipes?retryWrites=true&w=majority"

//Connect to Mongo
mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

mongoose.connection.once("open",()=>{
    console.log("connected to mongo");
});

const Recipe = require("./models/recipes")


app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());



//MIDDLEWARE
//bodyparser allows us to use form data
app.use(express.urlencoded({extended:true}));
// true allows for nesting

//use methodOverride.  We'll be adding a query parameter to our delete form named _method
app.use(methodOverride("_method"))


//INDEX
app.get('/africa', (req, res)=>{
    Recipe.find({}, (error, allRecipes)=>{
        res.render('index', {
            recipes: allRecipes
        })
    })
    
})



//NEW
app.get('/africa/new', (req, res)=>{
    res.render('new');
}),



//DESTROY 




//UPDATE
app.put("/fruit/:id", (req, res)=>{
    if(req.body.recipeCompleted ==="on"){
        req.body.recipeCompleted= true;
    } else{
        req.body.recipeCompleted= false
    }

    Recipe.findByIdAndUpdate(req.params.id,
        req.boddy,
        {new: true},
        (err, updateModel)=>{
            res.redirect("/africa")
        })
})



//CREATE
app.post('/africa/', (req, res)=>{
    if(req.body.recipeCompleted ==='on'){
        req.body.recipeCompleted=true;
    }else{
        req.body.recipeCompleted=false;
    }

    Recipe.create(req.body, (error, createdRecipe)=>{
        // res.send(createdRecipe)
        res.redirect("/africa")
    })
    // res.send(req.body);
});


//EDIT




//SHOW




























app.listen(PORT, ()=>{
    console.log(`listening on port ${PORT}`)
});