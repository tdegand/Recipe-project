import axios from "axios";
import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";

const Delete = (props) => {

    const [values, setValues] = useState({
        id: '',
    })

    const handleIdInputChange = (event) => {
        event.persist();
        setValues((values) => ({
            ...values,
            id: event.target.value,
        }));
    };

    const handleDelete = (e) => {
        console.log(props.recipes.id)
        axios.delete(`http://localhost:5000/api/recipes/${values.id}`, { params: { id: values.id } })
        .then(res => {
            console.log(res);
            console.log(res.data.json);
        })
        .catch(res => console.log('error', res))
    }

    return(

        <form className="search-form" onSubmit={handleDelete}>
            <label>
                Confirm ID:
            <input 
                type="number" 
                name="ID" 
                placeholder="Type ID to confirm"
                required
                value={values.id}
                onChange={handleIdInputChange}
            />
            </label>
            <button type="submit">Submit</button>
            <Link to="/">
                <button>Cancel</button>
            </Link>
        </form>
    );
}

export default withRouter(Delete)