import React, {Component} from 'react';
import Recipe from './components/recipe.js';
import axios from 'axios';



class App extends Component {

  state = {
    recipes: []
  }

  componentDidMount(){
    axios.get(`http://localhost:5000/api/recipes`)
    .then(data => {
      const recipes = data.data;
      console.log(recipes)
      this.setState({ recipes });
    })
  }

  render() {
    return (
      <div>
      this.state.recipes.map(recipe => {
        <Recipe name={recipe.name} description={recipe.description} ingredients={recipe.ingredient}/>)
      }
      </div>
    );
  }
  
}

export default App;
