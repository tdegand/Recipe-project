import axios from 'axios';
import React, { useState }from 'react';
import { Link } from "react-router-dom";
import history from '../history';

const UpdateForm = () => {

    const [values, setValues] = useState({
        name: '',
        description: '',
        ingredient: '',
    });

     const handleNameChange = (event) => {
        event.persist();
        setValues((values) => ({
            ...values,
            name: event.target.value,
        }));
    };
    const handleDesChange = (event) => {
        event.persist();
        setValues((values) => ({
            ...values,
            description: event.target.value,
        }));
    };
    const handleIngChange = (event) => {
        event.persist();
        setValues((values) => ({
            ...values,
            ingredient: event.target.value,
        }));
    };

    const getCurrentRecipe = () => {
        const path = window.location.pathname.split('/');
        const id = path[3];

        axios.get(`http://localhost:5000/api/recipes/${id}`)
        .then(res => {
            console.log(res);
            console.log(res.data.json);
        })
        .catch(res => console.log('error', res))
    }
    {getCurrentRecipe()}

    const handleFormSubmit = (e) => {
        e.preventDefault()
        const path = window.location.pathname.split('/');
        const id = path[3];

        axios.put(`http://localhost:5000/api/recipes/${id}`, values)
        .then(res => {
            console.log(res);
            console.log(res.data.json);
            history.push('/');
            window.location.reload();
        })
        .catch(res => console.log('error', res))
    }

            return(
                
                <form className="search-form" onSubmit={handleFormSubmit}>
                    <label>
                        Name:
                    <input 
                        type="text" 
                        name="name" 
                        placeholder="name" 
                        required
                        value={values.name}
                        onChange={handleNameChange}
                    />
                    </label>
                    <label>
                        Description:
                    <input 
                        type="text" 
                        name="description" 
                        placeholder="Description"
                        required
                        value={values.description}
                        onChange={handleDesChange}
                    />
                    </label>
                    <label>
                        Ingredients:
                    <input 
                        type="text" 
                        name="ingredients" 
                        placeholder="ingredients"
                        required
                        value={values.ingredient}
                        onChange={handleIngChange}
                    />
                    </label>
                    <button type="submit" className="submit-button">Submit</button>
                    <Link to="/">
                        <button>Cancel</button>
                    </Link>
                </form>
            )
        
}

export default UpdateForm;