import React, { Component } from 'react';

class UpdateForm extends Component {

    state = {
        name: '',
        description: '',
        ingredients: '',
    }

    handleChangeName = (e) => {
        this.setState({ name: e.target.value })
    };
    handleChangeDes = (e) => {
        this.setState({ description: e.target.value })
    };
    handleChangeIng = (e) => {
        this.setState({ ingredients: e.target.value })
    };

    handleFormSubmit = (e) => {
        e.preventDefault();
    }

        render() {
            return(
                <form className="search-form">
                    <label for="name">
                        Name:
                    </label>
                    <input 
                        type="text" 
                        name="name" 
                        placeholder={this.props.name} 
                        required
                    />
                    <label for="description">
                        Description:
                    </label>
                    <input 
                        type="text" 
                        name="description" 
                        placeholder={this.props.description}
                        required
                    />
                    <label for="ingredients">
                        Ingredients:
                    </label>
                    <input 
                        type="text" 
                        name="ingredients" 
                        placeholder={this.props.ingredient} 
                        required
                    />
                    <button type="submit" className="submit-button">Submit</button>
                </form>
            )
        }
        
}

export default UpdateForm;