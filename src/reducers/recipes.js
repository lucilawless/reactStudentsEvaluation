import recipes from  '../fixtures/recipes'
import {
  TOGGLE_LIKE_RECIPE,
  FETCHED_RECIPES,
  CREATE_RECIPE
} from '../actions/recipes'

const newId = (state) => {
  const ids = state
    .map((recipe) => recipe._id)
    .sort()
  return ['abcd', parseInt(ids[ids.length - 1].split('abcd')[1], 10) + 1].join('')
}

export default (state = recipes, {type, payload} = {}) => {
  switch(type) {
    case FETCHED_RECIPES :
      return [ ...payload ]

    case CREATE_RECIPE :
      return [{ ...payload, _id: newId(state) }].concat(state)

    case TOGGLE_LIKE_RECIPE :
      return state.map((recipe) => {
        if (recipe._id === payload) {
          return { ...recipe, liked: !recipe.liked }
        }

        return recipe
      })

    default :
      return state
  }
}
