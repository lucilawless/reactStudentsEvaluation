import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import RecipesContainer from './recipes/RecipesContainer'
import RecipePage from './recipes/RecipePage'
import SignIn from './users/SignIn'
import SignUp from './users/SignUp'

export default class Routes extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={RecipesContainer} />
        <Route path="/recipes/:recipeId" component={RecipePage} />
        <Route path="/sign-in" component={SignIn} />
        <Route path="/sign-up" component={SignUp} />
      </div>
    )
  }
}
