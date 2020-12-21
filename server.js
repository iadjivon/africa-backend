const express = require('express')
const app = express()
const mongoose = require('mongoose')

const PORT = process.env.PORT || 3000;

//declaring the mongoURI variable
const mongoURI =  "mongodb+srv://iadjivon:7L5BjoiBTM9gfCDI@cluster0.pulvm.mongodb.net/AfricaApp?retryWrites=true&w=majority";

//Connect to Mongo
mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

mongoose.connection.once("open",()=>{
    console.log("connected to mongo");
});

const Recipe = require("./models/recipe")


app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());



//MIDDLEWARE
//bodyparser allows us to use form data
app.use(express.urlencoded({extended:true}));
// true allows for nesting


//INDEX
app.get('/africa', (req, res)=>{
    res.send("new")
})



//NEW
app.get('/africa/new', (req, res)=>{
    res.render('new');
}),



//DESTROY 




//UPDATE




//CREATE

app.post('/africa/', (req, res)=>{
    if(req.body.recipeCompleted ==='on'){
        req.body.recipeCompleted=true;
    }else{
        req.body.recipeCompleted=false;
    }

    Recipe.create(req.body, (error, createdRecipe)=>{
        res.send(createdRecipe)
    })
    res.send(req.body);
});


//EDIT




//SHOW




























app.listen(PORT, ()=>{
    console.log(`listening on port ${PORT}`)
});