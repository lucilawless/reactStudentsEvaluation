import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import Title from '../components/Title'
import RecipeItem from './RecipeItem'
import './RecipesContainer.css'

class RecipesContainer extends PureComponent {
  renderRecipe(recipe, index) {
    return (
      <RecipeItem key={index} {...recipe} />
    )
  }

  render() {
    const { recipes } = this.props

    if (!recipes) { return null }

    return(
      <div className="RecipesContainer">
        <header>
          <Title content="All Recipes" />
        </header>

        <main>
          {recipes.map(this.renderRecipe)}
        </main>
      </div>
    )
  }
}

const mapStateToProps = ({ recipes }) => ({ recipes })

export default connect(mapStateToProps)(RecipesContainer)
