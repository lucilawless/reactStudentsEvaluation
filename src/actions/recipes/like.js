export const TOGGLE_LIKE_RECIPE = 'TOGGLE_LIKE_RECIPE'

export default (recipeId) => ({
  type: TOGGLE_LIKE_RECIPE,
  payload: recipeId
})
