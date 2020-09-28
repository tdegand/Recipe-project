import Axios from "axios";
import React, { useState } from "react";
import { withRouter } from "react-router-dom";

 const NewForm = () => {

    const [values, setValues] = useState({
        name: '',
        description: '',
        ingredients: '',
    });

    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const newRecipe = {
            name: this.state.name,
            description: this.state.description,
            ingredient: this.state.description
        }
        
        Axios.post (`localhost:5000/api/recipes`, { newRecipe })
        .then(res => {
            console.log(res);
            console.log(res.data);
        })
    }

    const handleNameInputChange = (event) => {
        event.persist();
        setValues((values) => ({
            ...values,
            firstName: event.target.value,
        }));
    };

    const handleDescriptionInputChange = (event) => {
        event.persist();
        setValues((values) => ({
            ...values,
            firstName: event.target.value,
        }));
    };

    const handleIngredientsInputChange = (event) => {
        event.persist();
        setValues((values) => ({
            ...values,
            firstName: event.target.value,
        }));
    };
    

        return(
            <form className="search-form" onSubmit={handleSubmit}>
                <label for="name">
                    Name:
                </label>
                <input 
                    type="text" 
                    name="name" 
                    placeholder="Name"
                    required
                    value={values.name}
                    onChange={handleNameInputChange}
                />
                <label for="description">
                    Description:
                </label>
                <input 
                    type="text" 
                    name="description" 
                    placeholder="description" 
                    required
                    value={values.description}
                    onChange={handleDescriptionInputChange}
                />
                <label for="ingredients">
                    Ingredients:
                </label>
                <input 
                    type="text" 
                    name="ingredients" 
                    placeholder="ingredients"  
                    required
                    value={values.ingredients}
                    onChange={handleIngredientsInputChange}
                />
                <button type="submit" className="submit-button">Submit</button>
            </form>
        ) 
}

export default withRouter(NewForm)