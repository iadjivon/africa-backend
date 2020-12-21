const React = require("react");

class New extends React.Component {
  render() {
    return (
        <div>
            <h1>this is the new route page </h1>
            <form action="/africa" method="POST">
                Recipe Name: <input type="text" name="name" />
                <br/>
                Total Cook Time: <input type="number" name="time" />
                <br/>
                Description: <input type="text" name="description" placeholder="give a brief description about the food" />
                <br/>
                Ingredients: <input type= "text" name="ingredient" />
                <br/>
               
                Instructions: <input type="text" name="instructions" />
                <br/>
                Recipe Complete: <input type="checkbox" name="recipeCompleted" /><br/>
                <input type="submit" name="" value="Create new recipe"/>
             </form>

        
        </div>);
  }
}

module.exports=New;