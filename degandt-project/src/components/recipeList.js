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
                <div className="home-header">
                    <h1>Recipes!</h1>
                    <Link to="/recipe/add">
                        <button className="addButton">Add</button>
                    </Link>
                </div>
                <ul className="recipe-items">
                    { recipes }
                </ul>
            </div> 
        );
} 


export default RecipeList;