import React from 'react';
import { Link } from 'react-router-dom';

const Recipe = props => {

    return(
        <li>
            <Link to={`/recipe/${props.id}`}>
                <h2>{props.name}</h2>
                <p>{props.description}</p>
                <p>{props.ingredients}</p>
            </Link>
        </li>
    )
}

export default Recipe