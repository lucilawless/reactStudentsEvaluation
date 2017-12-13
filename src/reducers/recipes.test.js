import { expect } from 'chai'
import recipes from './recipes'

describe('recipes reducer', () => {
  const reducer = recipes
  const initialState = []

  it('returns an empty array for the initial state', () => {
    expect(reducer()).to.eql(initialState)
  })
})
