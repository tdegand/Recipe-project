import React, {Component} from 'react';
import RecipeList from './components/recipeList.js';
import UpdateForm from './components/updateForm.js';
import NewForm from './components/newForm.js';
import axios from 'axios';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"


class App extends Component {

  state = {
    recipes: []
  }

  async componentDidMount(){
    await axios.get(`http://localhost:5000/api/recipes`)
    .then(data => {
      const recipes = data.data.recipes;
      console.log(recipes)
      this.setState({ recipes });
    })
  }

  componentWillUnmount(){

  }

  render() {
    return (
      <Router>
        <div className="App">
          <div className="container"> 
              <Switch>
                {/*Path for home page */}
                <Route 
                exact path="/" 
                render={() => (<RecipeList recipes={this.state.recipes}/>)} 
                />
                {/*Path for update form */}
                <Route 
                exact path="/recipe/update/:id" 
                render={() => (<UpdateForm recipes={this.state.recipes}/>)} 
                />
                {/*Path for creation form */}
                <Route 
                exact path="/recipe/add" 
                render={() => (<NewForm />)} 
                />
              </Switch>
          </div>
        </div>
      </Router>
      
    );
  }
  
}

export default App;
