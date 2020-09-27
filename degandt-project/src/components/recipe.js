import React from 'react';

function Recipe(props) {

    return(
        <div>
           <h2>{props.name}</h2>
           <p>Description</p>
           <h3>Ingredients</h3>
            <ul>
                <li>List</li>
                <li>List</li>
                <li>List</li>
            </ul> 
        </div>
    )
}


export default Recipe;