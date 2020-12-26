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


//CORS
const cors = require("cors");
const corsOptions = require("./configs/cors.js");

app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());



//MIDDLEWARE
//bodyparser allows us to use form data
app.use(express.urlencoded({extended:true}));
// true allows for nesting

//use methodOverride.  We'll be adding a query parameter to our delete form named _method
app.use(methodOverride("_method"))

app.use(cors())
app.use(express.json())

//////////////////////
//INDEX
//////////////////////
// app.get("/", (req, res) => {
//     res.json({ hello: "Hello World!" });
//   });

app.get("/recipe", async (req, res)=>{
    res.json(await Recipe.find({}));
})



//////////////////////
//CREATE
//////////////////////

app.post("/recipe/", async (req, res) => {
    res.json(await Recipe.create(req.body));
  });


//////////////////////
//UPDATE
//////////////////////
app.put("/recipe/:id", async (req, res) => {
    res.json(await Recipe.findByIdAndUpdate(req.params.id, req.body, { new: true }));
  });



//////////////////////
//NEW
//////////////////////



//////////////////////
//DESTROY 
//////////////////////

app.delete("/recipe/:id", async (req, res) => {
    res.json(await Recipe.find(req.params.id));
  });










//////////////////////
//EDIT
//////////////////////




//SHOW
app.get("/recipe/:id", async (req, res)=>{
  res.json(await Recipe.findById([{}]));
})





app.listen(PORT, ()=>{
    console.log(`listening on port ${PORT}`)
});