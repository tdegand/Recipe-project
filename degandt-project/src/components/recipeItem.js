import axios from "axios";
import React, { useState } from "react";
import { Link } from 'react-router-dom';

const Recipe = props => {

    return(
        <li>
                <h2>{props.name}</h2>
                <p>{props.description}</p>
                <p>{props.ingredients}</p>
                <Link to={`/recipe/update/${props.id}`}>
                    <button>Update</button>
                </Link>
                <Link to={`/recipe/delete/${props.id}`}>
                    <button type="submit">Delete</button>
                </Link>
        </li>
    )
}

export default Recipe