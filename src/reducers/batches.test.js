import { expect } from 'chai'
import batches from './batches'

describe('batches reducer', () => {
  const reducer = batches
  const initialState = []

  it('returns an empty array for the initial state', () => {
    expect(reducer()).to.eql(initialState)
  })
})
