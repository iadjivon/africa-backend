const React = require('react')

class Index extends React.Component {
    render(){
        return (
            <div> 
    <a href={`/africa/new`}><button> New Recipe </button> </a> 
        <div>
            <h1> this is the index page</h1>
            <ul >
                {
                    this.props.recipes.map((recipe, i) => {
                        return (
                        
                        <li>

                       <h1> {recipe.name } </h1>
                       
                      <h4> {recipe.cookTime} minutes</h4>

                      <h6> {recipe.description} </h6>

                      <h5> {recipe.ingredients} </h5>

                      <p> {recipe.instructions} </p>

                      <h5>{recipe.servingSize} servings</h5>
                        
                        
                        { recipe.recipeCompleted ? ` You cooked this recipe! We hope you enjoyed cooking!` : `We can't wait for you to try this recipe  ${recipe.name}` }



                        <br></br>
                        <a href={`/africa/${recipe._id}/edit`}> <button> Edit This Recipe</button></a>

                        <form action={`/africa/${recipe._id}?_method=DELETE`}method="POST">
                            <input type= "submit" value="DELETE"/>
                        </form>
                        </li>
                      
                        
                        )
                          
                    })
                 

                }
                        
            </ul>
           
        </div>
  
        </div> //change this to applayout
        
        )}
        
        
}

module.exports = Index;