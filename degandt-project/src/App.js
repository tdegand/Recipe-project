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
      const recipes = data.data.recipes;
      console.log(recipes)
      this.setState({ recipes });
    })
  }

  render() {
    return (
      <div>
       <Recipe recipes={this.state}/>
      </div>
    );
  }
  
}

export default App;
