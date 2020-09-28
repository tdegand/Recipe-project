import axios from "axios";
import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";

 const NewForm = () => {

    const [values, setValues] = useState({
        name: '',
        description: '',
        ingredient: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(values)
        axios.post(`http://localhost:5000/api/recipes`, values)
        .then(res => {
            console.log(values)
            console.log(res);
            console.log(res.data.json);
        })
        .catch(res => console.log('error', res))
    }

    const handleNameInputChange = (event) => {
        event.persist();
        setValues((values) => ({
            ...values,
            name: event.target.value,
        }));
    };

    const handleDescriptionInputChange = (event) => {
        event.persist();
        setValues((values) => ({
            ...values,
            description: event.target.value,
        }));
    };

    const handleIngredientsInputChange = (event) => {
        event.persist();
        setValues((values) => ({
            ...values,
            ingredient: event.target.value,
        }));
    };
    

        return(
            <form className="search-form" onSubmit={handleSubmit}>
                <label>
                    Name:
                <input 
                    type="text" 
                    name="name" 
                    placeholder="Name"
                    required
                    value={values.name}
                    onChange={handleNameInputChange}
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
                    onChange={handleDescriptionInputChange}
                />
                </label>
                <label>
                    Ingredients:
                <input 
                    type="text" 
                    name="ingredients" 
                    placeholder="Ingredients"  
                    required
                    value={values.ingredient}
                    onChange={handleIngredientsInputChange}
                />
                </label>
                <button type="submit">Submit</button>
                <Link to="/">
                    <button>Cancel</button>
                </Link>
            </form>
        ) 
}

export default withRouter(NewForm)