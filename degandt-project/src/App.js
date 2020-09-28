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
      <Router>
        <div className="App">
          <div className="container"> 
            <div>
              <Switch>
                {/*Path for home page */}
                <Route 
                exact path="/" 
                render={() => (<RecipeList recipes={this.state.recipes}/>)} 
                />
                {/*Path for update form */}
                <Route 
                exact path="/recipe/:id" 
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
        </div>
      </Router>
      
    );
  }
  
}

export default App;
