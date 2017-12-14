// src/batches/batchesContainer.test.js
import React from 'react'
import chai, { expect } from 'chai'
import { shallow } from 'enzyme'
import chaiEnzyme from 'chai-enzyme'
import batchesContainer from './batchesContainer'
import Title from '../components/Title'
import batchItem from './batchItem'
import batches from '../fixtures/batches'

chai.use(chaiEnzyme())

describe('<batchesContainer />', () => {
  const container = shallow(<batchesContainer batches={batches} />)

  it('is wrapped in a div with class name "batchesContainer"', () => {
    expect(container).to.have.className('batchesContainer')
  })

  it('contains a Title', () => {
    expect(container).to.have.descendants(Title)
  })

  it('sets the Title to "All batches"', () => {
    expect(container).to.contain(<Title content="All batches" />)
  })

  it('renders all batches as a batchItem', () => {
    expect(container).to.have.exactly(batches.length).descendants(batchItem)
  })
})
