import React from 'react';
import Recipe from './recipeItem.js'

const RecipeList = props => {

    let recipes = props.recipes.map(recipe =>
            <Recipe
                key={recipe.id}
                id={recipe.id}
                name={recipe.name}
                description={recipe.description}
                ingredients={recipe.ingredient}
            />
        );

        return(
            <div className="recipes">
                <ul>
                    { recipes }
                </ul>
            </div> 
        );
} 


export default RecipeList;