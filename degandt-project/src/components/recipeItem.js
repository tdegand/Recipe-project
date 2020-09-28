import React from 'react';
import { Link } from 'react-router-dom';

const Recipe = props => {

    return(
        <li>
                <h2>{props.name}</h2>
                <p>{props.description}</p>
                <p>{props.ingredients}</p>
                <Link to={`/recipe/${props.id}`}>
                    <button>Update</button>
                </Link>
                <button>Delete</button>
        </li>
    )
}

export default Recipe