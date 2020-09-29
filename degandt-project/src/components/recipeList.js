import React from 'react';
import { Link } from 'react-router-dom';
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
                <div class="home-header">
                    <h3>Recipes!</h3>
                    <Link to="/recipe/add">
                        <button class="addButton">Add</button>
                    </Link>
                </div>
                <ul class="recipe-items">
                    { recipes }
                </ul>
            </div> 
        );
} 


export default RecipeList;