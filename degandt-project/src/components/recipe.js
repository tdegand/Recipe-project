import React, {Component} from 'react';

class Recipe extends Component {

    render() {
        return(
            <div className="recipes">
                {this.props.map(recipe => (
                    <div>
                        <h2>{recipe.name}</h2>
                        <p>{recipe.description}</p>
                        <p>{recipe.ingredient}</p>
                    </div>
                ))}
            </div> 
        );
    }
} 


export default Recipe;