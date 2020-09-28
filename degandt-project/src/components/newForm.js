import REact from 'react';
import UpdateForm from './updateForm';

 const NewForm = () => {
    return(
        <form className="search-form">
            <label for="name">
                Name:
            </label>
            <input 
                type="text" 
                name="name" 
                placeholder="Name"
                required
            />
            <label for="description">
                Description:
            </label>
            <input 
                type="text" 
                name="description" 
                placeholder="description" 
                required
            />
            <label for="ingredients">
                Ingredients:
            </label>
            <input 
                type="text" 
                name="ingredients" 
                placeholder="ingredients"  
                required
            />
            <button type="submit" className="submit-button">Submit</button>
        </form>
    )
}

export default UpdateForm