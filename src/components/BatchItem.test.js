import React from 'react'
import chai, { expect } from 'chai'
import { shallow } from 'enzyme'
import chaiEnzyme from 'chai-enzyme'
import batchItem from './batchItem'
import imageIcon from '../images/vegetarian.svg'

chai.use(chaiEnzyme())

const batch = {
    title: 'Spanish Omelette',
    summary: 'A traditional dish from Spanish cuisine called tortilla española or tortilla de patatas. It is an omelette made with eggs and potatoes, sometimes also with onion and/or chives or garlic; fried in oil and often served cold as an appetizer.',
    vegan: false,
    vegetarian: true,
    pescatarian: false,
}

describe('<batchItem />', () => {
  const container = shallow(<batchItem { ...batch } />)

  it('is wrapped in a article tag with class name "batch"', () => {
    expect(container).to.have.tagName('article')
    expect(container).to.have.className('batch')
  })

  it('contains a the title', () => {
    expect(container.find('h1')).to.have.text(batch.title)
  })

  it('shows a image when it is vegetarian', () => {
    expect(container.find('ul > li > img')).to.have.attr('src', imageIcon)
  })
})
