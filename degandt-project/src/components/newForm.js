import axios from "axios";
import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import history from '../history';

 const NewForm = () => {

    const [values, setValues] = useState({
        name: '',
        description: '',
        ingredient: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post(`http://localhost:5000/api/recipes`, values)
        .then(res => {
            console.log(res);
            console.log(res.data.json);
            history.push('/');
            window.location.reload();
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
            <div className="recipes">
                <form className="form" onSubmit={handleSubmit}>
                    <label>
                        Name:
                    </label><input 
                        type="text" 
                        name="name" 
                        placeholder="Name"
                        required
                        value={values.name}
                        onChange={handleNameInputChange}
                    />
                    <label>
                        Description:
                    </label>
                    <input 
                        type="text" 
                        name="description" 
                        placeholder="Description" 
                        required
                        value={values.description}
                        onChange={handleDescriptionInputChange}
                    />
                    <label>
                        Ingredients:
                    </label>
                    <input 
                        type="text" 
                        name="ingredients" 
                        placeholder="Ingredients"  
                        required
                        value={values.ingredient}
                        onChange={handleIngredientsInputChange}
                    />
                    <fieldset>
                        <button type="submit" className="submitButton">Submit</button>
                        <Link to="/">
                            <button className="cancel">Cancel</button>
                        </Link>
                    </fieldset>
                    
                </form>
            </div>
        ) 
}

export default withRouter(NewForm)