const React = require('react')

class Index extends React.Component {
    render(){
        return (
            <div> 
    <a href={`/africa/new`}><button> New Recipe </button> </a> 
        <div>
            <ul>
                {
                    this.props.recipes.map((recipe, i) => {
                        return (
                        <div>
                       <h1> {recipe.name } </h1>
                       
                      <h4> { recipe.cookTime }</h4>

                      <p> { recipe.description } </p>

                      <h5> { recipe.ingredients } </h5>

                      <p> { recipe.instructions } </p>

                      <h5>{recipe.sercingSize}</h5>
                        
                        
                        { recipe.recipeCompleted ? ` We can't wait for you to try this recipe!` : ` We hope you enjoyed cooking ${recipe.name}` }



                        <br></br>
                        <a href={`/africa/${recipe._id}/edit`}> Edit This Recipe</a>

                        <form action={`/africa/${recipe._id}?_method=DELETE`} method="POST">
                            <input type= "submit" value="DELETE"/>
                        </form>
                        </div>
                        )
                    })

                }
                        
            </ul>
        </div>

        </div> //change this to applayout
        )}
        
}

module.exports = Index;