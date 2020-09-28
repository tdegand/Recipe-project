import axios from "axios";
import React from "react";
import { Link } from 'react-router-dom';

const Recipe = props => {

    const handleRemove = (e) => {
        e.preventDefault()
        axios.delete({
            method: 'delete',
            url: 'http://localhost:5000/api/recipes/${props.id}',
            
        })
        .then(res => {
            console.log(res);
            console.log(res.data.json);
        })
        .catch(res => console.log('error', res))
    }

    return(
        <li>
            <form>
                <h2>{props.name}</h2>
                <p>{props.description}</p>
                <p>{props.ingredients}</p>
                <Link to={`/recipe/update/${props.id}`}>
                    <button>Update</button>
                </Link>
                <button type="submit" onSubmit={handleRemove}>Delete</button>
            </form>
                
        </li>
    )
}

export default Recipe