const React = require('react');

class Edit extends React.Component{
    render() {
        return(
            <div>
                <form action={`/africa/${this.props.recipe._id}?_method=PUT`}method="POST">
                    Name: <input type="text" name="name" defaultValue={this.props.recipe.name}/>
                    <br/>

                    Total Cook Time: <input type="number" name="cookTime" defaultValue={this.props.recipe.cookTime}/>
                    <br/>

                    Serving Size: <input type="number" name="servingSize" defaultValue={this.props.recipe.servingSize}/>
                    <br/>

                    Description: <input type="text" name="description" defaultValue={this.props.recipe.description}/>
                    <br/>

                    Ingredients: <input type="text" name="ingredients" defaultValue={this.props.recipe.ingredients}/>
                    <br/>

                    Instructions: <input type="text" name="instructions" defaultValue={this.props.recipe.instructions}/>
                    <br/>

                    Recipe Complete: 
                    
                    {this.props.recipe.recipeCompleted ? (<input type="checkbox" name="recipeCompleted" defaultChecked/>) : (<input type="checkbox" name="recipeCompleted" />)}
                                 
                    <br/>

                    <input type="submit" value="Submit Changes"/>

                </form>
            </div>
        )
    }
}
module.exports=Edit;